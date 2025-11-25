import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function ClientMessages() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Shops UI State
  const [shopsToShow, setShopsToShow] = useState([]); 
  const [recommendedShops, setRecommendedShops] = useState([]); 
  const [shopsHidden, setShopsHidden] = useState(false);

  // Load initial issue
  useEffect(() => {
    const issue = sessionStorage.getItem("initial_ai_issue");
    if (issue) {
      sendMessage(issue);
      sessionStorage.removeItem("initial_ai_issue");
    }
  }, []);

  // -------------------------------------------------
  // SEND MESSAGE
  // -------------------------------------------------
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Clear shops immediately for new request
    setShopsToShow([]);

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

      // Add AI reply to messages
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);

      // ---- HANDLE SHOPS FROM BACKEND ----
      if (Array.isArray(shops) && shops.length > 0) {
        const formatted = shops.map((s) => ({
          id: s.id,
          name: s.name ?? "Unnamed Shop",
          rating_average: s.rating_average ?? "N/A",
          address: s.address ? String(s.address).trim() : "Unknown",
          raw: s,
        }));

        // Show shop list after a 1-second delay
        setTimeout(() => {
          setShopsHidden(false); // Unhide shop section
          setShopsToShow(formatted);
          setRecommendedShops(formatted.slice(0, 3));
        }, 1000);
      }

    } catch (err) {
      console.error("AI ERROR:", err);

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ The AI could not process your request. Try again." },
      ]);

    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => sendMessage(input);

  // -------------------------------------------------
  // UI
  // -------------------------------------------------
  return (
    <div className="bg-white flex flex-col h-full overflow-hidden text-gray-900">
      <main className="w-full flex-1 flex h-full min-h-0">

        {/* -------------------- SIDEBAR -------------------- */}
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
            <p className="text-gray-400 text-sm p-4">
              Your chats will show here soon.
            </p>
          </div>
        </div>

        {/* -------------------- CHAT AREA -------------------- */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden min-h-0">

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
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

            {loading && (
              <div className="text-gray-500 text-sm">AI is thinking...</div>
            )}
          </div>

          {/* ---------------- SHOP CARDS ---------------- */}
          {!shopsHidden && shopsToShow.length > 0 && (
            <div className="mt-4">

              {/* Header + Close */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-700">
                  Recommended Repair Shops
                </h2>

                <button
                  onClick={() => setShopsHidden(true)}
                  className="text-sm text-gray-500 bg-white hover:text-gray-700 flex items-center gap-1"
                >
                  ✕ Close
                </button>
              </div>

              {/* Cards */}
              <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-400">
                {shopsToShow.map((shop, i) => (
                  <div
                    key={shop.id}
                    className={`min-w-[260px] p-4 rounded-xl shadow-md border bg-white ${
                      i === 0
                        ? "border-blue-500 shadow-blue-200"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-base font-bold">{shop.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      ⭐ {shop.rating_average}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      📍 {shop.address}
                    </p>
                    <Link
                      to={`/shops/${shop.id}`}
                      state={{ shop }}   // <-- passes full shop object
                      className="mt-3 block w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-lg text-center"
                    >
                      View Shop
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="blue"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 9-18 9 5-9-5-9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
