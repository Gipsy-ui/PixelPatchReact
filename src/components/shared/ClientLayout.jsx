import { Link, Outlet } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import UserAvatar from './UserAvatar';
import ProfileDropdown from './ProfileDropdown';
import Footer from './Footer';
import { Bell, MessageCircle, Menu } from "lucide-react";
import { useState, useRef, useEffect } from 'react';

export default function ClientLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 flex flex-col">
      
      {/* HEADER */}
      <header className="border-b bg-white w-full">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-20">

            <Link to="/" className="text-2xl font-extrabold text-blue-600">
              PixelPatch
            </Link>

            {/* CLIENT Navigation */}
            <TopNavigation />

            {/* RIGHT ICONS */}
            <div className="hidden md:flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-500" />
              <MessageCircle className="w-6 h-6 text-gray-500" />

              <div ref={dropdownRef}>
                <UserAvatar
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  showDropdown={isDropdownOpen}
                  dropdownContent={<ProfileDropdown isOpen={isDropdownOpen} />}
                />
              </div>
            </div>

            <Menu className="md:hidden w-6 h-6 text-gray-500" />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
