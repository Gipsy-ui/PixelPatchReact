import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

// Icons (Lucide)
import { Bell, MessageCircle, Menu } from "lucide-react";

import TopNavigation from './TopNavigation';
import UserAvatar from './UserAvatar';
import ProfileDropdown from './ProfileDropdown';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      
      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="bg-white flex items-center justify-between h-20">
            
            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-extrabold text-blue-600">
                PixelPatch
              </Link>
            </div>

            {/* TOP NAV */}
            <TopNavigation />

            {/* RIGHT ACTIONS */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">

                {/* NOTIFICATIONS */}
                <button 
                  className="bg-white text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors"
                  aria-label="Notifications"
                >
                  <Bell className="w-6 h-6" />
                </button>

                {/* CHAT */}
                <button 
                  className="bg-white text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors"
                  aria-label="Chat"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>

                {/* PROFILE DROPDOWN */}
                <div ref={dropdownRef}>
                  <UserAvatar
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    showDropdown={isDropdownOpen}
                    dropdownContent={<ProfileDropdown isOpen={isDropdownOpen} />}
                  />
                </div>

              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button className="bg-white p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                <span className="sr-only">Open menu</span>
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children ?? <Outlet />}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
