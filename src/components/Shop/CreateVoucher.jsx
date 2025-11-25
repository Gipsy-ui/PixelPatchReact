import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PropTypes from 'prop-types';

function ShopDiscountModal({ onClose }) {
  const [discountType, setDiscountType] = useState('percentage');
  const [code, setCode] = useState('OCTFEST2025');
  const [value, setValue] = useState('10');
  const [validUntil, setValidUntil] = useState('');

  const navigate = useNavigate(); 

  const handleSave = () => {
    navigate("/business/discounts");  
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create Custom Vouchers</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Code</label>
            <input
              type="text"
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
                className={`rounded-lg p-4 transition-colors ${
                  discountType === 'percentage'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="font-medium">Percentage</span>
                <span className="text-sm">(eg. 10% off)</span>
              </button>
              <button
                onClick={() => setDiscountType('fixed')}
                className={`rounded-lg p-4 transition-colors ${
                  discountType === 'fixed'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="font-medium">Fixed Amount</span>
                <span className="text-sm">(eg. 100 Off)</span>
              </button>
            </div>
          </div>

          {/* Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Value</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Valid Until */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
            <input
              placeholder="MM/DD/YY"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full rounded-lg border-gray-200 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="rounded-lg bg-gray-800 py-2 px-6 text-base font-medium text-white hover:bg-gray-900 shadow-sm"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

ShopDiscountModal.propTypes = {
  onClose: PropTypes.func,
};

export default ShopDiscountModal;