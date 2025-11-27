import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';

/**
 * Admin AI Logs Page
 * Allows administrators to review historical interactions with the platform's AI.
 */

// --- Icons ---
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const ChevronDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><polyline points="6 9 12 15 18 9"></polyline></svg>;

// --- Mock Data ---
const logsData = [
  { id: 1, date: "2024-03-15 10:30 AM", userId: "user123", type: "Chatbot Conversation" },
  { id: 2, date: "2024-03-15 11:15 AM", userId: "user456", type: "AI Recommendation Query" },
  { id: 3, date: "2024-03-15 12:00 PM", userId: "user789", type: "Chatbot Conversation" },
  { id: 4, date: "2024-03-15 01:45 PM", userId: "user101", type: "AI Recommendation Query" },
  { id: 5, date: "2024-03-15 02:30 PM", userId: "user112", type: "Chatbot Conversation" },
  { id: 6, date: "2024-03-15 03:15 PM", userId: "user131", type: "AI Recommendation Query" },
  { id: 7, date: "2024-03-15 04:00 PM", userId: "user142", type: "Chatbot Conversation" },
  { id: 8, date: "2024-03-15 04:45 PM", userId: "user153", type: "AI Recommendation Query" },
  { id: 9, date: "2024-03-15 05:30 PM", userId: "user164", type: "Chatbot Conversation" },
  { id: 10, date: "2024-03-15 06:15 PM", userId: "user175", type: "AI Recommendation Query" },
];

const AdminAILogs = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Items (Matches previous Admin files)
  const navItems = [
    { section: 'MAIN', items: [
      { label: 'Dashboard', active: false },
      { label: 'Reports & Analytics', active: false }
    ]},
    { section: 'AI MANAGEMENT', items: [
      { label: 'AI Logs', active: true }, // Active Tab
      { label: 'Settings', active: false }
    ]},
    { section: 'USER MANAGEMENT', items: [
      { label: 'Users', active: false },
      { label: 'Verification', active: false }
    ]},
    { section: 'FINANCIAL', items: [
      { label: 'Transactions', active: false }
    ]},
    { section: 'SUPPORT', items: [
      { label: 'Support Tickets', active: false }
    ]}
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-[#1a73e8] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="font-extrabold text-xl tracking-tight">PixelPatch</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#1a73e8] text-white overflow-y-auto transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <h1 className="text-2xl font-extrabold tracking-tight mb-10 hidden md:block">PixelPatch</h1>
          
          <nav className="space-y-8">
            {navItems.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">
                  {group.section}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleNavClick(item.label)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          item.active 
                            ? 'bg-blue-600 text-white shadow-sm' 
                            : 'bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-white">
        
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex justify-end items-center h-16 px-8 border-b border-gray-100 sticky top-0 bg-white z-20">
          <div className="h-8 w-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer hover:bg-blue-700 transition-colors">
            A
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 animate-fade-in">
            
            {/* Header Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Logs</h2>
                <p className="text-indigo-900/60 text-sm mt-1">
                    Review historical interactions with the platform's AI, including chatbot conversations and AI recommendation queries.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-3xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by User ID or Interaction Type" 
                    className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-indigo-50/50 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-sm"
                />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
                {['Date', 'User ID', 'Interaction Type'].map((filter) => (
                    <button 
                        key={filter} 
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1.5 px-4 rounded-md transition-colors text-sm"
                    >
                        {filter}
                        <ChevronDownIcon />
                    </button>
                ))}
            </div>

            {/* Logs Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mt-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-900 w-1/4">Date</th>
                                <th className="px-6 py-4 font-medium text-gray-900 w-1/5">User ID</th>
                                <th className="px-6 py-4 font-medium text-gray-900 w-1/3">Interaction Type</th>
                                <th className="px-6 py-4 font-medium text-indigo-600 w-1/12">Details</th>
                                <th className="px-6 py-4 font-medium text-indigo-600 w-1/12">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {logsData.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 text-indigo-900/70">{log.date}</td>
                                    <td className="px-6 py-5 text-indigo-900/70">{log.userId}</td>
                                    <td className="px-6 py-5 text-indigo-900/70">{log.type}</td>
                                    <td className="px-6 py-5">
                                        <button className="bg-white text-indigo-900 font-bold hover:underline">View</button>
                                    </td>
                                    <td className="px-6 py-5">
                                        <button className="bg-white text-indigo-900 font-bold hover:underline">Flag</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default AdminAILogs;