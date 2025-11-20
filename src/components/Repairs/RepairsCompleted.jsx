import React, { useState, useEffect, useRef } from 'react';

// The Client Repair Completed Page Component
export default function ClientRepairCompleted() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Effect to handle clicking outside the dropdown
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
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. Header Navigation */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-extrabold text-blue-600">
                PixelPatch
              </a>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">AI Assistant</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Become a Partner</a>
              </div>
            </div>

            {/* Icons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Notification Icon */}
              <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                <span className="sr-only">Notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
              {/* Chat Icon */}
              <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                <span className="sr-only">Messages</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76v-1.503c0-.858.694-1.553 1.553-1.553h.002c.859 0 1.554.695 1.554 1.553v1.503A1.553 1.553 0 013.805 14.313H3.803A1.553 1.553 0 012.25 12.76zm3.003-1.503v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553v-1.503c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553zm3.004v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553v-1.503c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553zm10.493-1.553h-.002a1.553 1.553 0 00-1.553 1.553v1.503c0 .858.694 1.553 1.553 1.553h.002c.859 0 1.553-.695 1.553-1.553v-1.503c0-.858-.694-1.553-1.553-1.553zM9.75 12c0-.858.695-1.553 1.554-1.553h.002c.859 0 1.553.695 1.553 1.553v1.503c0 .858-.694 1.553-1.553 1.553h-.002c-.859 0-1.554-.695-1.554-1.553V12zm3.003 0v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553V12c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 19.5v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0h3.375m-3.375 0v-1.5c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.5m-3.375 0h3.375M9 19.5v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0h3.375m-3.375 0v-1.5c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.5m-3.375 0h3.375M4.5 19.5v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0h3.375m-3.375 0v-1.5c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.5m-3.375 0h3.375" />
                </svg>
              </button>
              
              {/* Profile Avatar */}
              <div className="relative">
                <button 
                  ref={profileButtonRef}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
                </button>
                
                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div ref={profileDropdownRef} className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1" role="none">
                      <div className="flex items-center px-4 py-3 border-b border-gray-200">
                        <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/dbeafe/1e40af?text=JD&font=inter" alt="User Avatar" />
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-500">johndoe@gmail.com</p>
                        </div>
                      </div>
                      <div className="py-1">
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Repairs</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Devices</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">AI Assistant</a>
                      </div>
                      <div className="py-1 border-t border-gray-200">
                        <a href="#" className="block px-4 py-3 text-sm text-blue-600 hover:bg-gray-100">Switch to Business</a>
                      </div>
                      <div className="py-1 border-t border-gray-200">
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Help</a>
                      </div>
                      <div className="py-1 border-t border-gray-200">
                        <a href="#" className="block px-4 py-3 text-sm text-red-600 hover:bg-gray-100">Log Out</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Status Banner */}
        <div className="bg-gray-100 border-l-4 border-gray-400 text-gray-800 p-4 rounded-lg flex justify-between items-center mb-6">
          <p className="font-medium">Repair request completed.</p>
          <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-full">
            Completed
          </span>
        </div>

        {/* Progress Stepper - All steps complete */}
        <div className="w-full mb-8">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500">
            {/* Step 1: Ready (Complete) */}
            <li className="flex md:w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Ready
              </span>
            </li>
            {/* Step 2: In Progress (Complete) */}
            <li className="flex md:w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                In Progress
              </span>
            </li>
            {/* Step 3: Delivery (Complete) */}
            <li className="flex md:w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Delivery
              </span>
            </li>
            {/* Step 4: Completed (Complete) */}
            <li className="flex items-center text-blue-600">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Completed
            </li>
          </ol>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          {/* Request Information */}
          <div className="relative pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Request Information</h2>
            <div className="absolute top-0 right-0 text-right">
              <p className="text-xs text-gray-500">Estimates Reply</p>
              <p className="text-sm font-semibold text-gray-900">3-4 Days</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <span className="text-gray-500">Device</span>
                <p className="font-medium text-gray-800">Samsung S25</p>
              </div>
              <div>
                <span className="text-gray-500">Pickup Address</span>
                <p className="font-medium text-gray-800">112, Normal Road, Baliwasan Zamboanga City</p>
              </div>
              <div>
                <span className="text-gray-500">Device Type</span>
                <p className="font-medium text-gray-800">Smartphone</p>
              </div>
              <div>
                <span className="text-gray-500">Preferred Time</span>
                <p className="font-medium text-gray-800">Oct 25, 2025</p>
              </div>
              <div>
                <span className="text-gray-500">Repair Type</span>
                <p className="font-medium text-gray-800">Screen Replacement</p>
              </div>
              <div>
                <span className="text-gray-500">Service Type</span>
                <p className="font-medium text-gray-800">Pickup</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">Description</span>
                <p className="font-medium text-gray-800">The screen of the phone is broken and it is not turning on.</p>
              </div>
            </div>
          </div>

          {/* Shop Info & Reference Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-b border-gray-200 pb-6">
            {/* Shop Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shop Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <h3 className="font-semibold text-gray-900">TechFix Pro</h3>
                <div className="text-sm">
                  <span className="text-gray-500">Address</span>
                  <p className="font-medium text-gray-800">5433 Dona Benita Drive, Canelar Zamboanga City</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Email</span>
                  <p className="font-medium text-gray-800">techfix@gmail.com</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Phone</span>
                  <p className="font-medium text-gray-800">998-505-177</p>
                </div>
              </div>
            </div>

            {/* Reference Images */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Reference Images</h2>
              <div className="flex flex-wrap gap-4">
                <img
                  src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Front"
                  alt="Phone Front"
                  className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1"
                />
                <img
                  src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Back"
                  alt="Phone Back"
                  className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1"
                />
              </div>
            </div>
          </div>

          {/* Assessment & Quotation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-b border-gray-200 pb-6">
            {/* Assessment */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Device Condition</span>
                  <p className="font-medium text-gray-800">Not Good.</p>
                </div>
                <div>
                  <span className="text-gray-500">Observed Issues</span>
                  <p className="font-medium text-gray-800">The phone might have internal problems.</p>
                </div>
                <div>
                  <span className="text-gray-500">Recommendation Summary</span>
                  <p className="font-medium text-gray-800">Overall it can be done.</p>
                </div>
                <div>
                  <span className="text-gray-500">References</span>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <img
                      src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Ref+1"
                      alt="Reference 1"
                      className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1"
                    />
                    <img
                      src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Ref+2"
                      alt="Reference 2"
                      className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quotation */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quotation</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Labor Fee:</span>
                  <span className="font-medium text-gray-800">500.00 PHP</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <span className="text-gray-600">Parts Cost:</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-500 pl-2">Samsung S25 Screen</span>
                    <span className="font-medium text-gray-800">4,500.00 PHP</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-500 pl-2">Samsung Front Camera</span>
                    <span className="font-medium text-gray-800">2,000.00 PHP</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base">
                    <span className="font-semibold text-gray-900">Total Estimate:</span>
                    <span className="font-bold text-blue-600">5,000.00 PHP</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Completion Time:</span>
                    <span className="font-medium text-gray-800">5 days</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-600">Warranty Coverage:</span>
                    <span className="font-medium text-gray-800">6 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="grid grid-cols-1 pt-6 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Transaction Details</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <span className="text-gray-500">Paid by:</span>
                    <p className="font-medium text-gray-800">GCash</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Address:</span>
                    <p className="font-medium text-gray-800">112, Normal Road, Baliwasan Zamboanga City</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Invoice:</span>
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      View &gt;
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">Contact:</span>
                    <p className="font-medium text-gray-800">+63 9875567412</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Request Time:</span>
                    <p className="font-medium text-gray-800">10-20-2025 09:18</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Payment Time:</span>
                    <p className="font-medium text-gray-800">10-22-2025 10:41</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Your Review Section */}
          <div className="grid grid-cols-1 pt-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Review</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/dbeafe/1e40af?text=JD" alt="User Avatar"></img>
                          <div className="ml-3">
                              <p className="text-sm font-semibold">johndoe</p>
                              <div className="flex items-center">
                                  <span className="text-xs text-yellow-500">★★★★★</span>
                                  <span className="text-xs text-gray-500 ml-2">1 Month Ago</span>
                              </div>
                          </div>
                      </div>
                      <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">23</span>
                          <button className="text-gray-500 hover:text-blue-600">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L6.6 10.5zM17.4 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L17.4 10.5zM12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm-1.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                          </button>
                          <button className="text-gray-500 hover:text-gray-900">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
                          </button>
                      </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                      Great Job. The service was amazing, the technician was very professionals and the shop is very welcoming. I would recommend this shop 100%.
                  </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Support Center Banner */}
        <div className="mt-6 bg-blue-100 p-4 rounded-lg flex items-center justify-between">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Support Center:</span>
            Having issues with your request?{' '}
            <a href="#" className="font-medium underline hover:text-blue-600">
              Contact Support
            </a>
          </p>
        </div>

        {/* Action Buttons */}
        {/* Removed as per "Completed" state in requirements, usually no actions left */}
      </main>

      {/* 3. Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
            {/* Column 1: Logo & Slogan */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <a href="#" className="text-2xl font-extrabold text-blue-600">
                PixelPatch
              </a>
              <p className="mt-3 text-sm text-gray-600">
                Where technology and expertise meet to bring your gadgets back to life.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    AI Assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Find Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Connect */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-gray-200 py-6">
            <p className="text-center text-sm text-gray-500">&copy; 2025 PixelPatch Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}