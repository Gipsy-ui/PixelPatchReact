import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';

/**
 * Admin User Management Page
 * Displays a grid of user accounts (Clients/Providers) with status indicators and search functionality.
 */

// --- Icons ---
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const XCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

// --- Mock Data ---
const usersData = [
  { id: 1, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James1" },
  { id: 2, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James2" },
  { id: 3, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Deactivated", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James3" },
  { id: 4, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James4" },
  { id: 5, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James5" },
  { id: 6, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Pending", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James6" },
  { id: 7, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James7" },
  { id: 8, name: "James Parkewr", email: "sampleemail@gmail.com", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James8" },
];

const AdminUserManagement = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('clients'); // clients | providers

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
      { label: 'Users', active: true }, // Active Tab
      { label: 'Verification', active: false }
    ]},
    { section: 'FINANCIAL', items: [
      { label: 'Transactions', active: false }
    ]},
    { section: 'SUPPORT', items: [
      { label: 'Support Tickets', active: false }
    ]}
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-500';
      case 'Deactivated': return 'text-red-500';
      case 'Pending': return 'text-orange-400';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircleIcon />;
      case 'Deactivated': return <XCircleIcon />;
      case 'Pending': return <ClockIcon />;
      default: return null;
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
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <p className="text-indigo-900/60 text-sm mt-1">
                    Manage client and provider accounts
                </p>
            </div>

            {/* Tabs & Search */}
            <div className="space-y-6">
                <div className="flex items-center gap-8 border-b border-transparent">
                    <button 
                        onClick={() => setActiveTab('clients')}
                        className={`bg-white text-sm font-bold pb-1 transition-colors ${activeTab === 'clients' ? 'text-[#1a73e8]' : 'text-gray-900 hover:text-[#1a73e8]'}`}
                    >
                        Clients
                    </button>
                    <button 
                        onClick={() => {
                            setActiveTab('providers');
                            navigate('/admin/users/providers');
                        }}
                        className={`bg-white text-sm font-bold pb-1 transition-colors ${activeTab === 'providers' ? 'text-[#1a73e8]' : 'text-gray-900 hover:text-[#1a73e8]'}`}
                    >
                        Providers
                    </button>
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search clients" 
                        className="block w-full pl-12 pr-3 py-3.5 border-none rounded-lg bg-[#EFEFF5] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-sm"
                    />
                </div>
            </div>

            {/* User Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {usersData.map((user) => (
                    <div key={user.id} className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                        <div className="relative mb-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden bg-teal-800">
                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        
                        <h3 className="text-gray-900 font-bold text-sm mb-1">{user.name}</h3>
                        <p className="text-gray-400 text-xs mb-6">{user.email}</p>
                        
                        <div className={`flex items-center gap-1.5 text-xs font-bold ${getStatusColor(user.status)}`}>
                            {getStatusIcon(user.status)}
                            <span>{user.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="bg-white flex items-center gap-6 mt-12 text-sm font-medium text-gray-600">
                <button className="bg-white hover:text-black font-bold">1</button>
                <button className="bg-white hover:text-black transition-colors">2</button>
                <button className="bg-white hover:text-black transition-colors">3</button>
                <button className="bg-white hover:text-black transition-colors">4</button>
                <button className="bg-white hover:text-black transition-colors">5</button>
                <button className="bg-white hover:text-black transition-colors">
                    <ChevronRightIcon />
                </button>
            </div>

        </div>
      </main>
    </div>
  );
};

export default AdminUserManagement;