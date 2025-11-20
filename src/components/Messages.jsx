import React, { useState, useRef, useEffect } from 'react';

// Main App component for preview
export default function App() {
  return <ClientMessages />;
}

// The Client Messages Page Component
function ClientMessages() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isProfileOpen &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <div
      className="bg-white text-gray-900 flex flex-col min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main Content Area */}
      <main className="flex-grow flex w-full h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full py-8">
          <div className="flex flex-col md:flex-row h-[600px] lg:h-[700px] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">

            {/* Left Sidebar: Chat List */}
            <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Chat</h1>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />

                  <div className="absolute right-0 flex items-center pr-2 pointer-events-none">
                    <span className="text-gray-500 text-xs mr-1">All</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-start p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>

                    <div className="ml-3 flex-1 overflow-hidden">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          TechFix Pro
                        </h3>
                        <span className="text-xs text-gray-500">10/22</span>
                      </div>

                      <p className="text-sm text-gray-500 truncate">
                        Your repair request is being reviewed
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content: Chat Messages */}
            <div className="flex-1 flex flex-col bg-gray-50/30 relative">
              {/* Messages Container */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="flex justify-end">
                  <div className="bg-[#0ea5e9] text-white px-4 py-2 rounded-t-xl rounded-bl-xl shadow-sm max-w-md text-sm">
                    Do you offer on-site repair?
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-xl rounded-br-xl shadow-sm max-w-md text-sm space-y-2">
                    <p>We currently do not offer on-site repair services.</p>
                    <p>
                      We perform all repairs in-shop at our main location, where
                      we have all the necessary tools and equipment to ensure
                      the highest quality service.
                    </p>
                    <p>
                      You are welcome to drop off your item during our business
                      hours, or we can look into arranging a courier pickup for
                      you, depending on your location.
                    </p>
                    <p>
                      How can I help you schedule a repair or answer any other
                      questions you have?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#0ea5e9] text-white px-4 py-2 rounded-t-xl rounded-bl-xl shadow-sm max-w-md text-sm">
                    Oh is that so? Nevermind then.
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-gray-100 border-t border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Explain your situation..."
                    className="w-full pl-[95px] pr-12 py-3 rounded-lg border-none bg-gray-200 text-sm focus:ring-2 focus:ring-blue-500 placeholder-blue-400/70 text-gray-700"
                  />

                  {/* Attach Icons (Left) */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex space-x-2">
                    <button className="bg-white text-gray-500 hover:text-gray-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button>

                    <button className="bg-white text-gray-500 hover:text-gray-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Send Button (Right) */}
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors duration-200 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      className="h-6 w-6 transition-transform duration-200 hover:scale-110"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 3l18 9-18 9 5-9-5-9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
