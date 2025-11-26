import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminNavHandler } from './adminNavHelper';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from 'chart.js';

// --- Register Chart.js components ---
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  BarElement
);

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
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// --- Chart Components ---
const CustomLineChart = ({ data, color = '#3b82f6' }) => {
  const chartData = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Revenue',
        data,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        borderColor: color,
        pointRadius: 4,
        pointHoverRadius: 6,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, `${color}33`);
          gradient.addColorStop(1, `${color}05`);
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: { 
        backgroundColor: color, 
        titleColor: '#fff', 
        bodyColor: '#fff',
        displayColors: false,
        padding: 10 
      },
    },
    scales: {
      x: { ticks: { color: '#1e40af', font: { size: 11 } }, grid: { display: false } },
      y: { ticks: { color: '#1e40af', font: { size: 11 } }, grid: { color: 'rgba(0,0,0,0.05)' } },
    },
  };

  return <div className="w-full h-full"><Line data={chartData} options={options} /></div>;
};

const CustomBarChart = ({ data, labels, color = '#bfdbfe', activeColor = '#3b82f6' }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, activeColor);
          gradient.addColorStop(1, color);
          return gradient;
        },
        borderRadius: 8,
        barThickness: 26,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: activeColor,
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: { ticks: { color: '#1e40af', font: { size: 11 } }, grid: { display: false } },
      y: { ticks: { color: '#1e40af', font: { size: 11 } }, grid: { color: 'rgba(0,0,0,0.05)' } },
    },
  };

  return <div className="w-full h-full"><Bar data={chartData} options={options} /></div>;
};

// --- Main AdminReports Page ---
const AdminReports = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { section: 'MAIN', items: [
      { label: 'Dashboard', active: false },
      { label: 'Reports & Analytics', active: true }
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
      { label: 'Support Tickets', active: false }
    ]}
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-[#1a73e8] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="font-extrabold text-xl tracking-tight">PixelPatch</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}><MenuIcon /></button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#1a73e8] text-white overflow-y-auto transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <h1 className="text-2xl font-extrabold tracking-tight mb-10 hidden md:block">PixelPatch</h1>
          <nav className="space-y-8">
            {navItems.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">{group.section}</h3>
                <ul className="space-y-1">
                  {group.items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleNavClick(item.label)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          item.active ? 'bg-blue-600 text-white shadow-sm' : 'bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white'
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

      {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>}

      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-white">
        <header className="hidden md:flex justify-end items-center h-16 px-8 border-b border-gray-100 sticky top-0 bg-white z-20">
          <div className="h-8 w-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold text-sm">A</div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
            <p className="text-gray-500 text-sm mt-1">Platform-wide usage and financial reporting</p>
          </div>

          {/* Search & Filters */}
          <div className="space-y-4 mb-8">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><SearchIcon /></div>
              <input 
                type="text" 
                placeholder="Search reports" 
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
              />
            </div>
          </div>

          {/* Financial Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Total Revenue */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100/50 rounded-xl p-6">
                <h4 className="text-sm font-medium text-gray-900">Total Revenue</h4>
                <p className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">₱1.2M</p>
                <p className="text-xs font-bold text-green-600 mt-1">+15%</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <h4 className="text-gray-900 font-bold text-xl">₱1.2M</h4>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Last 12 Months</span>
                    <span className="text-xs text-green-600 font-bold">+15%</span>
                  </div>
                </div>
                <div className="h-48">
                  <CustomLineChart data={[30, 45, 35, 50, 30, 45, 55, 40, 35, 60, 40, 55]} />
                </div>
              </div>
            </div>

            {/* Revenue by Category */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100/50 rounded-xl p-6">
                <h4 className="text-sm font-medium text-gray-900">Revenue by Service Category</h4>
                <p className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">₱800K</p>
                <p className="text-xs font-bold text-green-600 mt-1">+10%</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <h4 className="text-gray-900 font-bold text-xl">₱800K</h4>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Last 12 Months</span>
                    <span className="text-xs text-green-600 font-bold">+10%</span>
                  </div>
                </div>
                <div className="h-48 px-4">
                  <CustomBarChart 
                    data={[70, 85, 60, 40]} 
                    labels={['Home Repair', 'Tech Support', 'Cleaning', 'Other']} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* The rest of your tables, user acquisition, etc., remain unchanged */}

        </div>
      </main>
    </div>
  );
};

export default AdminReports;
