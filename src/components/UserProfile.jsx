import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ProfileDropdown from '../components/shared/ProfileDropdown';

const UserProfile = () => {
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
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <header className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center">
              <img className="h-20 w-20 rounded-full" src="https://placehold.co/80x80/dbeafe/1e40af?text=JD&font=inter" alt="John Doe Avatar" />
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                  <button className="bg-white border-2 border-gray-200 text-gray-400 hover:text-blue-600">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-green-600 font-medium">Verified User</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">Profile Settings</button>
              <button className="bg-white p-2 border-2 border-gray-200 text-gray-500 hover:text-gray-800 rounded-lg">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
              </button>
            </div>
          </div>

          <nav className="mt-6 border-b border-gray-200 -mb-6 -mx-6 px-6">
            <div className="flex space-x-6 overflow-x-auto">
              <a href="#" className="whitespace-nowrap py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent">Overview</a>
              <a href="#" className="whitespace-nowrap py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent">Services</a>
              <a href="#" className="whitespace-nowrap py-3 px-1 text-sm font-medium tab-active" aria-current="page">Devices</a>
              <a href="#" className="whitespace-nowrap py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent">Vouchers</a>
            </div>
          </nav>
        </header>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Saved Devices</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm transition-colors" title="Sort devices">Sort</button>
              <button className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors" title="Add new device">+</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
              <img className="w-full h-48 object-contain bg-gray-100 p-4" src="https://placehold.co/300x200/f3f4f6/9ca3af?text=Smartphone" alt="Samsung S24 Ultra" />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-500">Type: <span className="text-gray-900 font-semibold">Smartphone</span></p>
                <p className="text-sm font-medium text-gray-500">Brand: <span className="text-gray-900">Samsung</span></p>
                <p className="text-sm font-medium text-gray-500">Model: <span className="text-gray-900">S24 Ultra 8GB 512GB</span></p>
                <p className="text-sm font-medium text-gray-500">Ownership: <span className="text-gray-900">2 years</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
