import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';

/**
 * Admin Verification Page
 * Allows administrators to review and verify business registration details and documents.
 */

// --- Icons ---
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const DocumentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;

const AdminVerification = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      { label: 'Verification', active: true } // Active Tab
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
      <main className="flex-1 min-w-0 bg-[#fafafa]">
        
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex justify-end items-center h-16 px-8 bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="h-8 w-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer hover:bg-blue-700 transition-colors">
            A
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-10 animate-fade-in">
            
            {/* Header Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Business Registration Verification</h2>
                <p className="text-gray-500 text-sm mt-1">
                    Review and verify the business registration details submitted by users.
                </p>
            </div>

            {/* Business Information Form */}
            <section className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Business Information</h3>
                
                <div className="space-y-5 max-w-3xl">
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Business Name</label>
                        <input 
                            type="text" 
                            className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Registration Number</label>
                        <input 
                            type="text" 
                            className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        />
                    </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
                        <input 
                            type="text" 
                            className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        />
                    </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Contact Email</label>
                        <input 
                            type="email" 
                            className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        />
                    </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Contact Phone</label>
                        <input 
                            type="tel" 
                            className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        />
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Documents</h3>
                
                <div className="space-y-4 max-w-3xl">
                    {/* Document Item 1 */}
                    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                                <DocumentIcon />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Business License</p>
                                <p className="text-xs text-gray-500">View Document</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded transition-colors">
                            View
                        </button>
                    </div>

                    {/* Document Item 2 */}
                    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                                <DocumentIcon />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Tax ID</p>
                                <p className="text-xs text-gray-500">View Document</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded transition-colors">
                            View
                        </button>
                    </div>

                    {/* Document Item 3 */}
                    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                                <DocumentIcon />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Proof of Address</p>
                                <p className="text-xs text-gray-500">View Document</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded transition-colors">
                            View
                        </button>
                    </div>
                </div>
            </section>

            {/* Actions Section */}
            <section className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-gray-900">Actions</h3>
                <div className="flex gap-4">
                    <button className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded text-sm transition-colors shadow-sm">
                        Reject
                    </button>
                    <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded text-sm transition-colors shadow-sm">
                        Approve
                    </button>
                </div>
            </section>

        </div>
      </main>
    </div>
  );
};

export default AdminVerification;