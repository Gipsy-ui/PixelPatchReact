

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';

/**
 * Admin Support Tickets Page
 * Allows administrators to manage customer and provider support inquiries.
 */

// --- Icons ---
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;

// --- Mock Data ---
const ticketsData = [
  { id: "#12345", subject: "Issue with device setup", sender: "Emily Carter", status: "Open", lastUpdated: "2024-01-20", priority: "High" },
  { id: "#12346", subject: "Payment not processed", sender: "David Lee", status: "In Progress", lastUpdated: "2024-01-21", priority: "Medium" },
  { id: "#12347", subject: "Provider account verification", sender: "Sarah Jones", status: "Closed", lastUpdated: "2024-01-19", priority: "Low" },
  { id: "#12348", subject: "Technical support request", sender: "Michael Brown", status: "Open", lastUpdated: "2024-01-22", priority: "High" },
  { id: "#12349", subject: "Feedback on service quality", sender: "Jessica Wilson", status: "In Progress", lastUpdated: "2024-01-23", priority: "Medium" },
];

const AdminSupportTickets = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  // Navigation Items
  const navItems = [
    { section: 'MAIN', items: [
      { label: 'Dashboard', active: false },
      { label: 'Reports & Analytics', active: false }
    ]},
    { section: 'AI MANAGEMENT', items: [
      { label: 'AI Logs', active: false },
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
      { label: 'Support Tickets', active: true } // Active Tab
    ]}
  ];

  // Helper function for Status badge styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Open': return 'bg-[#EAEBF0] text-gray-800';
      case 'In Progress': return 'bg-[#EAEBF0] text-gray-800'; // Using neutral gray as per image, could be changed to blue/yellow
      case 'Closed': return 'bg-[#EAEBF0] text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Helper function for Priority badge styling
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High': return 'bg-[#EAEBF0] text-gray-800'; // Keeping consistent with image neutral style
      case 'Medium': return 'bg-[#EAEBF0] text-gray-800';
      case 'Low': return 'bg-[#EAEBF0] text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
      <main className="flex-1 min-w-0 bg-[#fafafa]">
        
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex justify-end items-center h-16 px-8 bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="h-8 w-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer hover:bg-blue-700 transition-colors">
            A
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
            
            {/* Header Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
                <p className="text-indigo-900/60 text-sm mt-1">
                    Manage all customer and provider support inquiries.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-4xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                </div>
                <input 
                    type="text" 
                    placeholder="Search tickets" 
                    className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-[#EFEFF5] placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-sm"
                />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-8 border-b border-gray-200">
                {['All', 'Open', 'In Progress', 'Closed'].map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => {
                            setActiveTab(tab);
                            if (tab === 'All') navigate('/admin/support/all');
                            else if (tab === 'Open') navigate('/admin/support/open');
                            else if (tab === 'In Progress') navigate('/admin/support/in-progress');
                            else if (tab === 'Closed') navigate('/admin/support/closed');
                        }}
                        className={`bg-white text-sm font-bold pb-2 transition-colors relative ${
                            activeTab === tab 
                            ? 'text-[#1a73e8] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1a73e8]' 
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tickets Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#fafafa] border-b border-gray-200 text-gray-900">
                            <tr>
                                <th className="px-6 py-4 font-medium">Ticket ID</th>
                                <th className="px-6 py-4 font-medium">Subject</th>
                                <th className="px-6 py-4 font-medium">Sender</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Last Updated</th>
                                <th className="px-6 py-4 font-medium">Priority</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {ticketsData.map((ticket, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-900">{ticket.id}</td>
                                    <td className="px-6 py-4 text-indigo-600">{ticket.subject}</td>
                                    <td className="px-6 py-4 text-indigo-600">{ticket.sender}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-4 py-1.5 rounded text-xs font-medium ${getStatusStyle(ticket.status)}`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-indigo-600">{ticket.lastUpdated}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-4 py-1.5 rounded text-xs font-medium ${getPriorityStyle(ticket.priority)}`}>
                                            {ticket.priority}
                                        </span>
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

export default AdminSupportTickets;