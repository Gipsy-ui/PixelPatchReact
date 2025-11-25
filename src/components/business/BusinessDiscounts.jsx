import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Box, Tag, Star, Settings, HelpCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";


// Main App component for preview
export default function App() {
  return <ShopDiscounts />;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + The ShopDiscountModal component is included in this file.       +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function ShopDiscountModal({ onClose }) {
  const [discountType, setDiscountType] = useState('percentage'); // 'percentage' or 'fixed'
  const [code, setCode] = useState('OCTFEST2025');
  const [value, setValue] = useState('10');
  const [validUntil, setValidUntil] = useState('');
  const navigate = useNavigate();


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create Custom Vouchers</h2>
          <button onClick={onClose} className="bg-white text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Code */}
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              Code
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Discount Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setDiscountType('percentage')}
                className={`rounded-lg p-4 text-center transition-colors ${
                  discountType === 'percentage'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="block font-medium">Percentage</span>
                <span className="text-sm">(eg. 10% off)</span>
              </button>
              <button
                onClick={() => setDiscountType('fixed')}
                className={`rounded-lg p-4 text-center transition-colors ${
                  discountType === 'fixed'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="block font-medium">Fixed Amount</span>
                <span className="text-sm">(eg. 100 Off)</span>
              </button>
            </div>
            <p className="text-sm text-green-600 mt-2">
              Choose the type of discount you want to apply.
            </p>
          </div>

          {/* Discount Value */}
          <div>
            <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">
              Discount Value
            </label>
            <input
              type="text"
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Valid Until */}
          <div>
            <label htmlFor="validUntil" className="block text-sm font-medium text-gray-700 mb-1">
              Valid Until
            </label>
            <input
              type="text"
              id="validUntil"
              placeholder="MM/DD/YY"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-200">
  <button
    onClick={() => navigate("/business/discounts")}
    type="button"
    className="rounded-lg border border-transparent bg-gray-800 py-2 px-6 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
    style={{ backgroundColor: "#064E3B" }}
  >
    Submit
  </button>
</div>

      </div>
    </div>
  );
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + End of ShopDiscountModal component                              +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// The Shop Discounts Component
function ShopDiscounts() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const discounts = [
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
    { code: 'OCTFEST2025', status: 'Active', type: 'Percentage', value: '10', validUntil: 'Nov 1, 2025' },
  ];

  return (
    <>
      <div className="flex bg-gray-100 font-inter">
        {/* 1. Sidebar */}
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

        {/* 2. Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Content */}
          <main className="p-8 flex-grow overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Discounts</h1>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Discount
              </button>
            </div>

            {/* Discounts Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid Until</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {discounts.map((discount, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{discount.code}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {discount.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{discount.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{discount.value}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{discount.validUntil}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-800">Edit</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal Render */}
      {modalOpen && <ShopDiscountModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
