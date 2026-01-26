// src/components/chat/ChatPage.jsx
import React, { useEffect, useState, useRef  } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import axios from "axios";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";

export default function ChatPage() {
  const autoStartRef = useRef(false);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [autoStarted, setAutoStarted] = useState(false);

  const token = localStorage.getItem("token");
  const location = useLocation();
  const shopFromLink = location.state?.shop || null;

  /* --------------------------------------------
     1. SOCKET CONNECTION
  -------------------------------------------- */
  useEffect(() => {
    if (!token) return;

    const s = io("http://localhost:5000", {
      auth: { token },
    });

    s.on("connect", () => console.log("socket connected", s.id));

    s.on("new_message", (msg) => {
      if (msg.chat_id === activeChat) {
        setMessages((prev) => [...prev, msg]);
      } else {
        // update chat list last message time
        setChats((prev) => {
          const idx = prev.findIndex((c) => c.id === msg.chat_id);
          if (idx !== -1) {
            const updated = [...prev];
            const chat = updated[idx];
            chat.last_message_at = msg.timestamp;
            updated.splice(idx, 1);
            return [chat, ...updated];
          }
          return prev;
        });
      }
    });

    setSocket(s);
    return () => s.disconnect();
  }, [token]);

  /* --------------------------------------------
     2. LOAD ALL CHATS
  -------------------------------------------- */
  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:5000/api/chat", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setChats(res.data);
      })
      .catch((err) => console.error("CHAT LIST ERROR:", err));
  }, [token]);

  /* --------------------------------------------
     3. AUTO-START CHAT (if coming from a shop)
  -------------------------------------------- */
  useEffect(() => {
    if (!shopFromLink) return;
    if (autoStartRef.current) return;

    const shopId = shopFromLink.id;
    if (!shopId) return;

    autoStartRef.current = true;
    console.log("AUTO-START triggered for shop:", shopId);

    const existingChat = chats.find((c) => c.shop_id === shopId);

    if (existingChat) {
      setActiveChat(existingChat.id);
      return;
    }

    axios
      .post(
        "http://localhost:5000/api/chat/start",
        { shop_id: shopId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const newChat = res.data.chat;
        setChats((prev) => [newChat, ...prev]);
        setActiveChat(newChat.id);
      })
      .catch((err) => console.error("CREATE CHAT ERROR:", err));
  }, [shopFromLink, chats, token]);


  /* --------------------------------------------
     4. AUTO-OPEN MOST RECENT CHAT (if not auto-starting)
  -------------------------------------------- */
  useEffect(() => {
    if (autoStarted) return;
    if (activeChat) return;

    if (chats.length > 0) {
      setActiveChat(chats[0].id);
    }
  }, [chats, autoStarted]);

  /* --------------------------------------------
     5. LOAD MESSAGES FOR ACTIVE CHAT
  -------------------------------------------- */
  useEffect(() => {
    if (!activeChat || !token) return;

    if (socket) socket.emit("join", activeChat);

    axios
      .get(`http://localhost:5000/api/chat/${activeChat}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("CHAT MSG ERROR:", err));

    return () => {
      if (socket) socket.emit("leave", activeChat);
    };
  }, [activeChat, socket, token]);

  const refreshMessages = () =>
    axios
      .get(`http://localhost:5000/api/chat/${activeChat}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessages(res.data));

  /* --------------------------------------------
     UI
  -------------------------------------------- */
  return (
    <div className="h-screen flex bg-gray-100">
      <ChatList
        chats={chats}
        activeChat={activeChat}
        onSelectChat={setActiveChat}
      />

      <div className="flex-1 h-full">
        <ChatWindow
          chatId={activeChat}
          messages={messages}
          refreshMessages={refreshMessages}
          socket={socket}
          chats={chats}
        />
      </div>
    </div>
  );
}
