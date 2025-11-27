import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';

/**
 * Admin Financial Transactions Page
 * Displays a list of all payment and payout activities with summary metrics.
 */

// --- Icons ---
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;

// --- Mock Data ---
const transactionsData = [
  { id: "TXN123456", date: "2024-07-26", amount: "₱150.00", type: "Payment", status: "Completed", user: "User: Alex Johnson" },
  { id: "TXN789012", date: "2024-07-25", amount: "₱120.00", type: "Payout", status: "Completed", user: "Provider: Tech Solutions Inc." },
  { id: "TXN345678", date: "2024-07-24", amount: "₱75.00", type: "Payment", status: "Completed", user: "User: Sarah Williams" },
  { id: "TXN901234", date: "2024-07-23", amount: "₱200.00", type: "Payout", status: "Completed", user: "Provider: Gadget Repair Co." },
  { id: "TXN567890", date: "2024-07-22", amount: "₱50.00", type: "Payment", status: "Completed", user: "User: Michael Brown" },
  { id: "TXN234567", date: "2024-07-21", amount: "₱180.00", type: "Payout", status: "Completed", user: "Provider: Quick Fix Electronics" },
  { id: "TXN890123", date: "2024-07-20", amount: "₱90.00", type: "Payment", status: "Completed", user: "User: Emily Davis" },
  { id: "TXN456789", date: "2024-07-19", amount: "₱130.00", type: "Payout", status: "Completed", user: "Provider: Expert Techs" },
  { id: "TXN012345", date: "2024-07-18", amount: "₱60.00", type: "Payment", status: "Completed", user: "User: David Wilson" },
  { id: "TXN678901", date: "2024-07-17", amount: "₱220.00", type: "Payout", status: "Completed", user: "Provider: Tech Wizards" },
];

const AdminTransactions = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Transactions');

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
      { label: 'Transactions', active: true }
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
      <main className="flex-1 min-w-0 bg-[#fafafa]">
        
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex justify-end items-center h-16 px-8 bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="h-8 w-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer hover:bg-blue-700 transition-colors">
            A
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-10 animate-fade-in">
            
            {/* Header Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Financial - Transactions</h2>
                <p className="text-indigo-900/60 text-sm mt-1">
                    Track all payment and payout activities across the platform.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-4xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                </div>
                <input 
                    type="text" 
                    placeholder="Search transactions by ID, user, or provider" 
                    className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-[#EFEFF5] placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-sm"
                />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                {['All Transactions', 'Payments', 'Payouts', 'Refunds'].map((filter) => (
                    <button 
                        key={filter} 

                        // Wag alisin kasi Filter Logic ito
                        // onClick={() => {
                        //     setActiveFilter(filter);
                        //     if (filter === 'All Transactions') navigate('/admin/transactions/all');
                        //     else if (filter === 'Payments') navigate('/admin/transactions/payments');
                        //     else if (filter === 'Payouts') navigate('/admin/transactions/payouts');
                        //     else if (filter === 'Refunds') navigate('/admin/transactions/refunds');
                        // }}
                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            activeFilter === filter 
                            ? 'bg-gray-300 text-gray-900' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#fafafa] border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-900">Transaction ID</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Date</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Amount</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Type</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Status</th>
                                <th className="px-6 py-4 font-medium text-gray-900">User/Provider</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {transactionsData.map((txn, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-700">{txn.id}</td>
                                    <td className="px-6 py-4 text-indigo-500">{txn.date}</td>
                                    <td className="px-6 py-4 text-indigo-500 font-medium">{txn.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded text-xs font-medium">
                                            {txn.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded text-xs font-medium">
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-indigo-500">
                                        {txn.user}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Summary Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Card 1 */}
                    <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6">
                        <p className="text-gray-900 font-medium text-sm mb-2">Total Processing Fees</p>
                        <p className="text-2xl font-bold text-gray-900">₱5,250.00</p>
                    </div>

                     {/* Card 2 */}
                     <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6">
                        <p className="text-gray-900 font-medium text-sm mb-2">Net Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">₱45,750.00</p>
                    </div>

                     {/* Card 3 */}
                     <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6">
                        <p className="text-gray-900 font-medium text-sm mb-2">Refunds Processed</p>
                        <p className="text-2xl font-bold text-gray-900">15</p>
                    </div>

                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default AdminTransactions;