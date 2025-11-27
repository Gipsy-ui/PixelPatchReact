// src/layouts/BusinessLayout.jsx
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import BusinessNavigation from '../business/BusinessNavigation';
import UserAvatar from './UserAvatar';
import BusinessProfileDropdown from './BusinessProfileDropdown';
import Footer from './Footer';
import { 
  Bell, 
  MessageCircle, 
  Menu, 
  Wrench, 
  Percent, 
  Star, 
  Settings as Cog, 
  HelpCircle, 
  Home, 
  Hammer, 
  Box, 
  Tag, 
  Settings 
} from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { ROUTES } from '../../constants/routes';

export default function BusinessLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 flex">
      
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="py-6 px-4">
          {/* Logo */}
          <Link to="/business" className="text-2xl font-extrabold text-blue-600 px-2">
            PixelPatch
          </Link>

          {/* Navigation */}
          <nav className="mt-8 space-y-2">
            <Link
              to="/business"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <Home className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Dashboard</span>
            </Link>

            <span className="block px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Request
            </span>

            <Link
              to="/business/repairs"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business/repairs") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <Hammer className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Repair</span>
            </Link>

            <Link
              to="/business/services"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business/services") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <Box className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Services</span>
            </Link>

            <Link
              to="/business/discounts"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business/discounts") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <Tag className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Discounts</span>
            </Link>

            <Link
              to="/business/reviews"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business/reviews") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <Star className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Reviews</span>
            </Link>

            <span className="block px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Settings
            </span>

            <Link
              to="/business/settings"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business/settings") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <Settings className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Settings</span>
            </Link>

            <Link
              to="/business/help"
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive("/business/help") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Help</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* MAIN COLUMN */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* TOP BAR */}
        <header className="bg-white border-b border-gray-200 h-20 flex-shrink-0">
          <div className="flex justify-end items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <button className="bg-white text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors" aria-label="Notifications">
                <Bell className="h-6 w-6" />
              </button>
              <button 
                className="bg-white text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors" 
                aria-label="Messages" 
                onClick={() => navigate(ROUTES.MESSAGES)}
              >
                <MessageCircle className="h-6 w-6" />
              </button>
              <div ref={dropdownRef}>
                <UserAvatar 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                  showDropdown={isDropdownOpen} 
                  dropdownContent={<BusinessProfileDropdown isOpen={isDropdownOpen} onClose={() => setIsDropdownOpen(false)} />} 
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
