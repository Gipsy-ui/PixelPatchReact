// src/pages/business/BusinessDashboard.jsx
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { ROUTES } from '../../constants/routes';
import { Home, Hammer, Box, Tag, Star, Settings, HelpCircle } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BusinessDashboard = () => {
  // Header and profile dropdown are provided by shared BusinessLayout.
  // This page should only render sidebar + main content.

  const miniChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: { display: false },
      y: { display: false, beginAtZero: true }
    }
  };

  const clientUpData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: [10, 15, 12, 18, 20],
      borderColor: '#16a34a',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(22, 163, 74, 0.1)',
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const clientDownData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: [20, 18, 15, 12, 10],
      borderColor: '#dc2626',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const requestsData = {
    labels: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Requests',
      data: [11000, 10500, 12000, 11756, 11500],
      borderColor: '#3B82F6',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const revenueData = {
    labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    datasets: [{
      label: 'Revenue',
      data: [2000,2200,2100,2500,2800,2600,3000,3348,2900,3100,3500,3800],
      borderColor: '#3B82F6',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const donutData = {
    labels: ['Pending', 'Accepted', 'In Progress', 'Completed'],
    datasets: [{
      data: [590, 340, 142, 410],
      backgroundColor: ['#93c5fd','#a5b4fc','#9333ea','#2563eb'],
      borderWidth: 0,
      hoverOffset: 8
    }]
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `${context.label}: ${context.raw}` }
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-20 flex items-center justify-start px-6 flex-shrink-0">
          <Link to={ROUTES.BUSINESS.DASHBOARD} className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
        </div>

        <nav className="flex-1 overflow-y-auto sidebar-scroll px-4 py-4">
          <ul className="space-y-2">
            <li>
              <Link
                to={ROUTES.BUSINESS.DASHBOARD}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
            </li>

            <li className="pt-2">
              <span className="px-4 text-xs font-semibold uppercase text-gray-500">Request</span>
            </li>
            <li>
              <Link
                to={ROUTES.BUSINESS.REPAIR}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
              >
                <Hammer className="h-5 w-5" />
                Repair
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.BUSINESS.SERVICES}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
              >
                <Box className="h-5 w-5" />
                Services
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.BUSINESS.DISCOUNTS}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
              >
                <Tag className="h-5 w-5" />
                Discounts
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.BUSINESS.REVIEWS}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
              >
                <Star className="h-5 w-5" />
                Reviews
              </Link>
            </li>

            <li className="pt-2">
              <span className="px-4 text-xs font-semibold uppercase text-gray-500">Settings</span>
            </li>
            <li>
              <Link
                to={ROUTES.BUSINESS.SETTINGS}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.BUSINESS.HELP}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
              >
                <HelpCircle className="h-5 w-5" />
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Overview</h1>

          {/* Top Row Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Client Stats */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Client this month</h2>
              <div className="flex items-start justify-between mt-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">1,235</span>
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                    <span>2.5%</span>
                  </span>
                </div>
                <div className="w-20 h-10">
                  <Line data={clientUpData} options={miniChartOptions} />
                </div>
              </div>
              <div className="flex items-start justify-between mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">456</span>
                  <span className="text-sm font-medium text-red-600 flex items-center gap-1">
                    <span>1.5%</span>
                  </span>
                </div>
                <div className="w-20 h-10">
                  <Line data={clientDownData} options={miniChartOptions} />
                </div>
              </div>
            </div>

            {/* Requests */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Statistics</h2>
              <p className="text-base font-semibold text-gray-900">Requests This Month</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold">11,756</span>
                <span className="text-sm font-medium text-red-600">-23%</span>
              </div>
              <div className="h-28 mt-4">
                <Line data={requestsData} options={{ ...miniChartOptions, plugins: { ...miniChartOptions.plugins, tooltip: { enabled: true } } }} />
              </div>
            </div>

            {/* Total Transactions */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Statistics</h2>
              <p className="text-base font-semibold text-gray-900">Total Transactions</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold">1,027</span>
                <span className="text-sm font-medium text-green-600">+2.75%</span>
              </div>
              <div className="h-28 mt-4">
                <Line data={revenueData} options={{ ...miniChartOptions, plugins: { ...miniChartOptions.plugins, tooltip: { enabled: true } } }} />
              </div>
            </div>
          </div>

          {/* Bottom Row: Donut and Revenue Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Requests</h2>
              <div className="h-64 relative my-4">
                <Doughnut data={donutData} options={donutOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">1.05</span>
                  <span className="text-sm text-gray-500">Average range</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Total Revenue 2025</h2>
              <div className="h-80 mt-6">
                <Line data={revenueData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
                  scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                    y: { grid: { color: '#e5e7eb', borderDash: [2,4] }, ticks: { font: { size: 10 }, callback: v => (v/1000)+'k' }, min: 0, max: 5000 }
                  }
                }} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;
