import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Home, Hammer, Box, Tag, Star, Settings, HelpCircle } from 'lucide-react';

// Main component to render the page
export default function App() {
  return <ShopServices />;
}

// The Shop Services Page Component
function ShopServices() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isProfileOpen &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isProfileOpen]);

  const services = [
    { category: 'Smartphone', type: 'Screen Replacement', time: '2 Days', price: '200 PHP' },
    { category: 'Camera', type: 'Lens Replacement', time: '9 Days', price: '200 PHP' },
    { category: 'Smartphone', type: 'Speaker', time: '4 Days', price: '200 PHP' },
    { category: 'Laptop', type: 'Screen Replacement', time: '2 Days', price: '200 PHP' },
    { category: 'Laptop', type: 'RAM Upgrade', time: '1 Day', price: '200 PHP' },
    { category: 'Smartphone', type: 'Screen Replacement', time: '6 Days', price: '200 PHP' },
  ];

  return (
    <div className="flex bg-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      {/* <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="py-6 px-4">
          <Link to="/business" className="text-2xl font-extrabold text-blue-600 px-2">
            PixelPatch
          </Link>

          <nav className="mt-8 space-y-2">
            <Link
              to="/business"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Dashboard</span>
            </Link>

            <span className="block px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Request
            </span>

            <Link
              to="/business/repairs"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Hammer className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Repair</span>
            </Link>

            <Link
              to="/business/services"
              className="flex items-center px-3 py-2.5  bg-blue-50 text-blue-600 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Box className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Services</span>
            </Link>

            <Link
              to="/business/discounts"
              className="flex items-center px-3 py-2.5 rounded-lg transition-colors"
            >
              <Tag className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Discounts</span>
            </Link>

            <Link
              to="/business/reviews"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Star className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Reviews</span>
            </Link>

            <span className="block px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Settings
            </span>

            <Link
              to="/business/settings"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Settings</span>
            </Link>

            <Link
              to="/business/help"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Help</span>
            </Link>
          </nav>
        </div>
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Page Content */}
        <main className="p-8 flex-grow">
          {/* Service Type Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Service Type</h1>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">On site</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Drop off</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Pickup</span>
              </label>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Services</h2>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate(ROUTES.BUSINESS.SERVICE_ADD_DELETE)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add New Service
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-64"
                />
                <svg
                  className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Services Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repair Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeframe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{service.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{service.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{service.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a href="/shop/details" className="text-blue-600 hover:text-blue-800 font-medium">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
