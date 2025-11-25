import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function ClientPaymentDetailsModal({ onClose }) {
  const navigate = useNavigate();
  const handleClose = onClose || (() => navigate(-1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h2>

          <button 
            onClick={handleClose}
            className="bg-white p-2 text-gray-400 hover:text-gray-600 border-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8 space-y-8">

          {/* ORDER SUMMARY */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>

            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT - Device Info */}
              <div className="flex-1 space-y-4">
                <p className="text-lg font-medium text-gray-900">Samsung S25</p>

                <div className="grid gap-4 text-sm">
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Device Type</p>
                    <p className="font-medium text-lg text-gray-700">Smartphone</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Repair Type</p>
                    <p className="font-medium text-lg text-gray-700">Screen Replacement</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Service Type</p>
                    <p className="font-medium text-lg text-gray-700">Pickup</p>
                  </div>
                </div>
              </div>

              {/* RIGHT - Images */}
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-4">Reference Images</p>
                <div className="flex gap-4 pb-4">
                  <img 
                    src="https://placehold.co/120x160/e0f2fe/3b82f6?text=Front" 
                    className="w-24 h-32 rounded-lg border bg-white object-contain p-1"
                  />
                  <img 
                    src="https://placehold.co/120x160/e0f2fe/3b82f6?text=Back" 
                    className="w-24 h-32 rounded-lg border bg-white object-contain p-1"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200"></div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <p className="font-medium text-base text-gray-700">techfix@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Address</p>
                <p className="font-medium text-base text-gray-700">112 Normal Road, Baliwasan</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Phone</p>
                <p className="font-medium text-base text-gray-700">998-505-177</p>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200"></div>

          {/* VOUCHER */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Shop Voucher
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter voucher code"
                className="flex-1 rounded-lg border border-gray-300 bg-white p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700">
                Apply
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Add available voucher codes in the input above.
            </p>
          </div>

          {/* TRUST BADGE */}
          <div className="bg-blue-100 rounded-lg p-6 border border-blue-200 space-y-4">

            <div className="flex gap-3">
              <div className="text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 text-sm">Free pickup</h4>
                <p className="text-xs text-blue-700">Within Zamboanga City.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 text-sm">7-Day Money Back Guarantee</h4>
                <p className="text-xs text-blue-700">Refund available if unsatisfied.</p>
              </div>
            </div>

          </div>

          {/* PRICE BREAKDOWN */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Sub Total:</span>
              <span>5,000.00 PHP</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Pickup:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-base font-bold text-gray-900 border-t pt-4">
              <span>Total:</span>
              <span>5,000.00 PHP</span>
            </div>
          </div>

          {/* PROCEED BUTTON */}
          <div className="flex justify-end pt-4">
            <button
                onClick={() => navigate(ROUTES.REPAIRS_IN_PROGRESS)}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
                Proceed to Payment
            </button>
            </div>


        </div>
      </div>
    </div>
  );
}

export default ClientPaymentDetailsModal;