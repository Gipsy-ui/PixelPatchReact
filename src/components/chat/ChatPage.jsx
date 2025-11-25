import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import axios from "axios";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios.get("http://localhost:5000/api/chats", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setChats(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="h-screen flex bg-gray-100">
      <ChatList 
        chats={chats} 
        activeChat={activeChat} 
        onSelectChat={setActiveChat} 
      />

      <ChatWindow chatId={activeChat} />
    </div>
  );
}
