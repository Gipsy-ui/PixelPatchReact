import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Box, Tag, Star, Settings, HelpCircle } from 'lucide-react';

const BusinessHelp = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
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
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Box className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Services</span>
            </Link>

            <Link
              to="/business/discounts"
              className="flex items-center px-3 py-2.5 bg-blue-50 text-blue-600 rounded-lg transition-colors"
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
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Business Help Center</h1>
        <p className="text-gray-600">Business Help Center is coming soon.</p>
      </div>
    </div>
  );
};

export default BusinessHelp;
