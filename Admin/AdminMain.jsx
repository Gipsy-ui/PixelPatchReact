import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminNavHandler } from "./adminNavHelper";

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

// --- Chart.js imports ---
import { Line, Bar } from "react-chartjs-2";
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
} from "chart.js";

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

// --- Charts ---
export const CustomLineChart = ({ data }) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Activity",
        data,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        borderColor: "#1a73e8",
        pointRadius: 4,
        pointHoverRadius: 6,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(26,115,232,0.25)");
          gradient.addColorStop(1, "rgba(26,115,232,0.02)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1a73e8",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: { color: "#1e40af", font: { size: 11 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#1e40af", font: { size: 11 } },
        grid: { color: "rgba(0,0,0,0.05)" },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-72 md:h-60 lg:h-72">
      <Line data={chartData} options={options} />
    </div>
  );
};

export const CustomBarChart = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Activity",
        data,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(26,115,232,0.9)");
          gradient.addColorStop(1, "rgba(26,115,232,0.3)");
          return gradient;
        },
        borderRadius: 8,
        hoverBackgroundColor: "#1a73e8",
        barThickness: 26,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      intersect: true,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1a73e8",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: { color: "#1e40af", font: { size: 11 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#1e40af", font: { size: 10 } },
        grid: { color: "rgba(0,0,0,0.05)" },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-72 md:h-60 lg:h-72">
      <Bar data={chartData} options={options} />
    </div>
  );
};

// --- Stat Card ---
const StatCard = ({ title, value, percentage, isPositive }) => (
  <div className="bg-gray-100/80 rounded-xl p-6 flex flex-col justify-between h-full min-h-[160px] hover:shadow-md transition-shadow">
    <div>
      <h3 className="text-gray-900 text-sm font-medium mb-1">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 tracking-tight">{value}</div>
    </div>
    <div className="mt-4">
      <span
        className={`text-sm font-bold ${isPositive ? "text-green-600" : "text-red-600"}`}
      >
        {isPositive ? "+" : ""}
        {percentage}
      </span>
    </div>
  </div>
);

// --- Main Dashboard ---
const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleNavClick = getAdminNavHandler(navigate);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#1a73e8] text-white overflow-y-auto transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-extrabold tracking-tight mb-10 hidden md:block">
            PixelPatch
          </h1>
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">
                MAIN
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("Dashboard")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white shadow-sm"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("Reports & Analytics")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    Reports & Analytics
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">
                AI MANAGEMENT
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("AI Logs")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    AI Logs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("Settings")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    Settings
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">
                USER MANAGEMENT
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("Users")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    Users
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("Verification")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    Verification
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">
                FINANCIAL
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("Transactions")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    Transactions
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3 px-2">
                SUPPORT
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("Support Tickets")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-100 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    Support Tickets
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-white">
        <header className="hidden md:flex justify-end items-center h-16 px-8 border-b border-gray-100 sticky top-0 bg-white z-20">
          <div className="h-8 w-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-500 text-sm mt-1">
              High-level summary of the platform's overall health and key metrics.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Active Users" value="12,345" percentage="12%" isPositive />
            <StatCard title="Total Completed Repairs" value="8,765" percentage="8%" isPositive />
            <StatCard title="Overall Revenue Generated" value="₱543,210" percentage="15%" isPositive />
            <StatCard title="New Registrations" value="2,345" percentage="5%" isPositive />
          </div>

          {/* User Activity */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">User Activity</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Line Chart Card */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-gray-900 font-medium text-sm">New Registrations Over Time</h4>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-600 font-bold text-lg">+5%</span>
                    <span className="text-gray-500">Last 30 Days</span>
                  </div>
                </div>
                <CustomLineChart data={[20, 45, 30, 60, 40, 55, 25]} />
              </div>

              {/* Bar Chart Card */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-gray-900 font-medium text-sm">User Types</h4>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-green-600 font-bold">+5%</span>
                    <span className="text-gray-500">Last 30 Days</span>
                  </div>
                </div>
                <CustomBarChart data={[80, 65]} labels={["Customers", "Providers"]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
