import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

/**
 * Admin AI Settings Page
 * Allows administrators to configure AI parameters, privacy settings, and feature toggles.
 */

// --- Icons ---
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const AdminAISettings = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for toggles/sliders
  const [aiInsightsEnabled, setAiInsightsEnabled] = useState(false);
  const [aiSupportEnabled, setAiSupportEnabled] = useState(false);
  const [verbosity, setVerbosity] = useState(50);

  // Navigation Items
  const navItems = [
    {
      section: 'MAIN',
      items: [
        { label: 'Dashboard', active: false },
        { label: 'Reports & Analytics', active: false },
      ],
    },
    {
      section: 'AI MANAGEMENT',
      items: [
        { label: 'AI Logs', active: false },
        { label: 'Settings', active: true },
      ],
    },
    {
      section: 'USER MANAGEMENT',
      items: [
        { label: 'Users', active: false },
        { label: 'Verification', active: false },
      ],
    },
    {
      section: 'FINANCIAL',
      items: [{ label: 'Transactions', active: false }],
    },
    {
      section: 'SUPPORT',
      items: [{ label: 'Support Tickets', active: false }],
    },
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
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-[#1a73e8] text-white overflow-y-auto transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6">
          <h1 className="text-2xl font-extrabold tracking-tight mb-10 hidden md:block">
            PixelPatch
          </h1>

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
            <h2 className="text-2xl font-bold text-gray-900">
              AI Management - Settings
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Configure the AI parameters, recommendation categories, data usage
              policies, and enable/disable AI features.
            </p>
          </div>

          {/* Section 1: AI Response Generation */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              AI Response Generation
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Tone
                </label>
                <input
                  type="text"
                  className="block w-full max-w-lg px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>

              <div>
                <label id="verbosity-label" className="block text-sm font-medium text-gray-900 mb-2">
                  Verbosity
                </label>
                <Slider
                  value={verbosity}
                  onChange={(e, val) => setVerbosity(typeof val === 'number' ? val : verbosity)}
                  aria-labelledby="verbosity-label"
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  sx={{ width: '100%', maxWidth: 400 }}
                />
              </div>
            </div>
          </section>

          {/* Section 2: AI-Powered Recommendations */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              AI-Powered Recommendations
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Recommendation Categories
                </label>
                <input
                  type="text"
                  className="block w-full max-w-lg px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Algorithms
                </label>
                <input
                  type="text"
                  className="block w-full max-w-lg px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Data Usage and Privacy */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Data Usage and Privacy
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Data Usage Policy
                </label>
                <input
                  type="text"
                  className="block w-full max-w-lg px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Privacy Settings
                </label>
                <input
                  type="text"
                  className="block w-full max-w-lg px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
            </div>
          </section>

          {/* Section 4: AI Feature Controls */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              AI Feature Controls
            </h3>

            <div className="space-y-6 max-w-2xl">
              {/* Toggle 1: AI Insights */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    AI Insights
                  </label>
                  <p className="text-xs text-indigo-900/60">
                    Enable or adjust AI-driven insights and analytics.
                  </p>
                </div>
                <Switch
                  checked={aiInsightsEnabled}
                  onChange={(e) => setAiInsightsEnabled(e.target.checked)}
                  color="primary"
                  inputProps={{ 'aria-label': 'AI Insights Switch' }}
                />
              </div>

              {/* Toggle 2: AI Support */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    AI Support
                  </label>
                  <p className="text-xs text-indigo-900/60">
                    Enable or adjust AI-powered support features.
                  </p>
                </div>
                <Switch
                  checked={aiSupportEnabled}
                  onChange={(e) => setAiSupportEnabled(e.target.checked)}
                  color="primary"
                  inputProps={{ 'aria-label': 'AI Support Switch' }}
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="pt-4">
            <button className="bg-[#1a73e8] hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md shadow-sm transition-colors text-sm">
              Save Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAISettings;
