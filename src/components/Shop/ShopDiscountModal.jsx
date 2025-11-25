import React, { useState } from 'react';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';

export const ShopDiscountModal = ({ onClose, initialCode = 'OCTFEST2025' }) => {
  const [discountType, setDiscountType] = useState('percentage');
  const [code, setCode] = useState(initialCode);
  const [value, setValue] = useState('10');
  const [validUntil, setValidUntil] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create Custom Voucher</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white text-gray-500 hover:text-gray-700 shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">Code</label>
            <input id="code" value={code} onChange={e => setCode(e.target.value)} className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
            <div className="grid grid-cols-2 gap-4">
              {['percentage','fixed'].map(type => (
                <button key={type} onClick={() => setDiscountType(type)} className={`rounded-lg p-4 text-center transition-colors ${discountType === type ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}> 
                  <span className="block font-medium capitalize">{type}</span>
                  <span className="text-sm">{type === 'percentage' ? '(e.g. 10% off)' : '(e.g. 100 off)'}</span>
                </button>
              ))}
            </div>
            <p className="text-sm text-green-600 mt-2">Choose the type of discount you want to apply.</p>
          </div>
          <div>
            <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">Discount Value</label>
            <input id="value" value={value} onChange={e => setValue(e.target.value)} className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="validUntil" className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
            <input id="validUntil" placeholder="MM/DD/YY" value={validUntil} onChange={e => setValidUntil(e.target.value)} className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
        </div>
        <div className="flex justify-end gap-3 p-6 bg-gray-50 border-t border-gray-200">
          <button onClick={onClose} className="rounded-lg py-2 px-5 text-sm font-medium text-gray-700 hover:bg-gray-100">Cancel</button>
          <button type="submit" className="rounded-lg bg-gray-800 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2" style={{ backgroundColor: '#064E3B' }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

// Route-level wrapper: renders modal standalone with close navigating back to discounts page.
export default function ShopDiscountModalRoute() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ShopDiscountModal onClose={() => window.history.back()} />
      {/* Optional underlying page link */}
      <div className="absolute top-4 left-4">
        <Link to={ROUTES.SHOP_MANAGEMENT.DISCOUNTS} className="text-sm text-blue-600 hover:underline">Back to Discounts</Link>
      </div>
    </div>
  );
}
