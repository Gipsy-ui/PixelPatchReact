// business/pages/BusinessDashboard.jsx
import { Line, Doughnut } from "react-chartjs-2";
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
  Legend,
} from "chart.js";

import BusinessLayout from "../components/BusinessLayout";

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

export default function BusinessDashboard() {
  // Chart configs
  const miniChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: { display: false },
      y: { display: false, beginAtZero: true },
    },
  };

  const clientUpData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [10, 15, 12, 18, 20],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const clientDownData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [20, 18, 15, 12, 10],
        borderColor: "#dc2626",
        backgroundColor: "rgba(220,38,38,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const requestsData = {
    labels: ["Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [11000, 10500, 12000, 11756, 11500],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const revenueData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        data: [
          2000, 2200, 2100, 2500, 2800, 2600, 3000, 3348, 2900, 3100, 3500, 3800,
        ],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const donutData = {
    labels: ["Pending", "Accepted", "In Progress", "Completed"],
    datasets: [
      {
        data: [590, 340, 142, 410],
        backgroundColor: ["#93c5fd", "#a5b4fc", "#9333ea", "#2563eb"],
        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: { legend: { display: false } },
  };

  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Overview</h1>

        {/* TOP ROW STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* CLIENTS */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500">
              Client this month
            </h2>

            <div className="flex items-start justify-between mt-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">1,235</span>
                <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                  ▲ 2.5%
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
                  ▼ 1.5%
                </span>
              </div>
              <div className="w-20 h-10">
                <Line data={clientDownData} options={miniChartOptions} />
              </div>
            </div>
          </div>

          {/* REQUESTS */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500">Statistics</h2>
            <p className="text-base font-semibold">Requests This Month</p>
            <div className="flex gap-2 items-baseline mt-2">
              <span className="text-3xl font-bold">11,756</span>
              <span className="text-sm font-medium text-red-600">-23%</span>
            </div>
            <div className="h-28 mt-4">
              <Line data={requestsData} options={miniChartOptions} />
            </div>
          </div>

          {/* TRANSACTIONS */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500">Statistics</h2>
            <p className="text-base font-semibold">Total Transactions</p>
            <div className="flex gap-2 items-baseline mt-2">
              <span className="text-3xl font-bold">1,027</span>
              <span className="text-sm font-medium text-green-600">
                +2.75%
              </span>
            </div>
            <div className="h-28 mt-4">
              <Line data={revenueData} options={miniChartOptions} />
            </div>
          </div>
        </div>

        {/* DONUT + REVENUE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* DONUT */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h2 className="text-lg font-semibold">Monthly Requests</h2>

            <div className="h-64 relative my-4">
              <Doughnut data={donutData} options={donutOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">1.05</span>
                <span className="text-sm text-gray-500">Average range</span>
              </div>
            </div>

            {/* LEGEND */}
            <div className="space-y-3">
              {[
                { label: "Completed", value: 410, color: "#2563eb" },
                { label: "In Progress", value: 142, color: "#9333ea" },
                { label: "Accepted", value: 340, color: "#a5b4fc" },
                { label: "Pending", value: 590, color: "#93c5fd" },
              ].map((i) => (
                <div key={i.label} className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: i.color }}
                    />
                    {i.label}
                  </span>
                  <span className="text-sm font-medium">{i.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REVENUE */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow border border-gray-100">
            <h2 className="text-lg font-semibold">Total Revenue 2025</h2>
            <div className="flex gap-2 items-baseline mt-1">
              <span className="text-3xl font-bold">₱12.7K</span>
              <span className="text-sm font-medium text-green-600">
                1.3% vs Last Year
              </span>
            </div>

            <div className="h-80 mt-6">
              <Line
                data={revenueData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { font: { size: 10 } },
                    },
                    y: {
                      grid: { color: "#e5e7eb", borderDash: [2, 4] },
                      ticks: {
                        font: { size: 10 },
                        callback: (v) => `${v / 1000}k`,
                      },
                      min: 0,
                      max: 5000,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
