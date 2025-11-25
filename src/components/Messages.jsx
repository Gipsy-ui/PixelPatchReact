import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ClientMessages() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load initial issue
  useEffect(() => {
    const issue = sessionStorage.getItem("initial_ai_issue");
    if (issue) {
      sendMessage(issue);
      sessionStorage.removeItem("initial_ai_issue");
    }
  }, []);

  // -----------------------------
  // SEND MESSAGE
  // -----------------------------
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user input to chat
    const userMsg = { sender: "user", text };
    const newHistory = [...messages, userMsg];

    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/analyze", {
        text,
        history: newHistory,
      });

      const { reply, shops } = res.data;

      // Add AI reply
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);

      // If shops exist, display them
      if (shops && shops.length > 0) {
        const list = shops
          .map(
            (s, i) =>
              `${i + 1}. ${s.name}\n` +
              `⭐ Rating: ${s.rating_average ?? "N/A"}\n` +
              `📍 Address: ${s.address || "Unknown"}`
          )
          .join("\n\n");

        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: `Here are repair shops I recommend:\n\n${list}` },
        ]);
      }

    } catch (err) {
      console.error("AI ERROR:", err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ The AI could not process your request. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleSend = () => sendMessage(input);

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="bg-white flex flex-col h-full overflow-hidden text-gray-900">
      <main className="w-full flex-1 flex h-full min-h-0">

        {/* SIDEBAR */}
        <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 flex flex-col min-h-0">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold mb-4">Chat</h1>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-3 pr-10 py-2 border rounded-md text-sm"
              />
              <div className="absolute right-2 text-gray-500 text-xs pointer-events-none">
                All
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">
            <p className="text-gray-400 text-sm p-4">Your chats will show here soon.</p>
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden min-h-0">

          {/* MESSAGES */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 min-h-0">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-4 py-2 rounded-xl max-w-md text-sm whitespace-pre-line shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-bl-xl"
                      : "bg-gray-200 text-gray-800 rounded-br-xl"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && <div className="text-gray-500 text-sm">AI is thinking...</div>}
          </div>

          {/* INPUT */}
          <div className="p-4 bg-gray-100 border-t">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Explain your situation..."
                className="w-full pr-14 pl-4 py-3 rounded-lg bg-gray-200 text-sm"
              />

              <button
                onClick={handleSend}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gray-200 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="blue" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 9-18 9 5-9-5-9z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
