import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const ClientAIAssistant = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: "My laptop won't turn on"
    },
    {
      id: 2,
      sender: 'ai',
      text: "If your laptop won't turn on, start by checking whether it's receiving power. Plug it into a working outlet and see if any lights appear on the charger or laptop itself. If there's still no response, try performing a power reset — unplug the charger, remove the battery if possible, and hold down the power button for 15 to 30 seconds to discharge any remaining electricity, then reconnect the battery and charger before trying again."
    },
    {
      id: 3,
      sender: 'user',
      text: "It didnt work, can you recommend someone to fix this?"
    },
    {
      id: 4,
      sender: 'ai',
      type: 'shop-recommendation',
      text: "Sure! here are some Service Repair shops available:"
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: input
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'ai',
        text: "I've noted that. Is there anything specific regarding the device model you can tell me?"
      }]);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      
     
      {/* <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
                
                <button 
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="bg-white md:hidden text-gray-500 hover:text-gray-900"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">PixelPatch</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 font-medium hover:text-blue-600">Home</a>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700">AI Assistant</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Services</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Become a Partner</a>
            </div>

            <div className="flex items-center gap-4">
               <button className="text-gray-500 hover:text-gray-900 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
               </button>
               <button className="text-gray-500 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
               </button>
               <div className="h-9 w-9 rounded-full bg-teal-500 flex items-center justify-center text-white overflow-hidden border-2 border-white shadow-sm">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
               </div>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full overflow-hidden">
        
        {/* Sidebar */}
        <aside className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out border-r border-gray-200 p-4
            md:relative md:translate-x-0
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
            <div className="flex justify-between items-center mb-6 md:hidden">
                 <span className="font-bold text-gray-900">Menu</span>
                 <button onClick={() => setSidebarOpen(false)} className="bg-white text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
            </div>

            <div className="hidden md:flex justify-between items-center mb-6">
                 <button className="bg-white text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                 </button>
                 <button className="bg-white text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                 </button>
            </div>

            <div className="space-y-4">
                <button 
                    onClick={() => setMessages([])}
                    className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 transition-colors w-full bg-white"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    New chat
                </button>
                <button className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 transition-colors w-full bg-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    Search Chat
                </button>
            </div>

            <div className="mt-8">
                <h3 className="text-sm font-bold text-gray-900 border-b border-gray-200 pb-2 mb-2">Chats</h3>
                <ul className="space-y-1">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <li key={item}>
                            <button className={`bg-white w-full text-left px-2 py-2 rounded text-sm truncate ${item === 2 ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}>
                                Laptop won't start...
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
            ></div>
        )}

        {/* Chat Interface */}
        <main className="flex-1 flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] relative">
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start w-full'}`}>
                        <div className={`
                            ${msg.sender === 'user' 
                                ? 'bg-cyan-500 text-white rounded-2xl rounded-tr-sm px-6 py-3 max-w-[85%] md:max-w-xl' 
                                : 'bg-slate-100 text-gray-800 rounded-2xl rounded-tl-sm px-6 py-5 w-full md:max-w-lg lg:max-w-xl space-y-4'
                            } shadow-sm
                        `}>
                            {msg.type === 'shop-recommendation' ? (
                                <>
                                    <p className="text-sm font-medium">{msg.text}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[1, 2, 3, 4].map((shopId) => (
                                          <div 
                                            key={shopId} 
                                            className="bg-gray-200 rounded-lg p-3 flex items-center gap-3 hover:bg-gray-300 transition-colors cursor-pointer"
                                            onClick={() => {
                                              if (shopId === 1) {
                                                navigate(`/shop/1`);
                                              }
                                            }}
                                          >
                                                <div className="h-10 w-10 bg-black rounded flex-shrink-0"></div>
                                                <div>
                                                    <p className="text-xs font-bold text-gray-800">TechFix Pro #{shopId}</p>
                                                    <p className="text-[10px] text-gray-500">Shop Rating:</p>
                                                    <div className="flex text-yellow-500 text-[10px]">★★★★☆</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center pt-2">
                                      <button onClick={() => navigate(ROUTES.SERVICES)} className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium px-6 py-2 rounded-full transition-colors flex items-center gap-1">
                                            Show more Shops
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p className={msg.sender === 'ai' ? "text-sm leading-relaxed" : ""}>
                                    {msg.text}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 bg-white border-t border-gray-100 flex-shrink-0 z-20">
                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-slate-100 rounded-xl flex items-center px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-shadow">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Explain your situation..." 
                            className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400 outline-none"
                        />
                        <div className="flex items-center gap-3 text-gray-400">
                             <button className="bg-white hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                             </button>
                             <button className="bg-white hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                             </button>
                             <button 
                                onClick={handleSend}
                                className={`${input.trim() ? 'text-blue-600' : 'bg-white text-gray-400'} hover:text-blue-700 transition-colors`}
                             >
                                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                             </button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
      </div>
    </div>
  );
};