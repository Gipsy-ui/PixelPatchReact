import React, { useState } from 'react';

// Main App component for preview
export default function App() {
  return (
    <div className="bg-gray-200 p-10 relative min-h-screen flex items-center justify-center font-inter">
      {/* The modal is shown by default for this preview */}
      <ShopAddQuotationModal onClose={() => console.log('Close modal')} />
    </div>
  );
}

// The Add Quotation Modal Component
export function ShopAddQuotationModal({ onClose }) {
  // State for form fields
  const [partPrice, setPartPrice] = useState('2,500.00');
  const [laborFee, setLaborFee] = useState('2,500.00');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [warrantyIncluded, setWarrantyIncluded] = useState(true);
  const [warrantyDuration, setWarrantyDuration] = useState('5');
  const [warrantyUnit, setWarrantyUnit] = useState('Months');

  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      
      {/* Modal Panel */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Add Quotation</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Device Details */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Device Details</h3>
            <p className="text-lg font-medium text-gray-900 mt-1">Samsung S25</p>
          </div>
          
          {/* Findings from Assessment */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Findings from Assessment</h3>
            <p className="text-base text-gray-900 mt-1">
              This phone screen need to be replaced in a delicate manner.
            </p>
          </div>
          
          {/* Parts Required */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Parts Required</h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900">S25 Brand New Screen</p>
                <p className="text-xs text-gray-500">x1</p>
              </div>
              
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-900 whitespace-nowrap">Price</label>
                <div className="flex rounded-md shadow-sm">
                   <input
                    type="text"
                    value={partPrice}
                    onChange={(e) => setPartPrice(e.target.value)}
                    className="block w-32 rounded-l-md border-gray-300 bg-gray-50 border-r-0 p-2 text-sm text-right focus:border-blue-500 focus:ring-blue-500"
                  />
                  <select className="rounded-r-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500">
                    <option>PHP</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Labor Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Labor Fee</label>
            <div className="flex gap-3">
                <input
                  type="text"
                  value={laborFee}
                  onChange={(e) => setLaborFee(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                />
                 <select className="w-24 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500">
                    <option>PHP</option>
                    <option>USD</option>
                  </select>
            </div>
          </div>
          
          {/* Estimated Time */}
          <div>
             <label className="block text-sm font-medium text-gray-900 mb-2">Estimated Time</label>
             <input
                type="text"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
                placeholder="MM/DD/YY"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
          </div>
          
          {/* Warranty Included Checkbox */}
          <div className="flex items-center">
            <input
              id="warranty-checkbox"
              type="checkbox"
              checked={warrantyIncluded}
              onChange={(e) => setWarrantyIncluded(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="warranty-checkbox" className="ml-2 text-base font-semibold text-blue-600 cursor-pointer">
              Warranty Included
            </label>
          </div>
          
          {/* Warranty Details (Conditional) */}
          {warrantyIncluded && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Warranty</label>
              <div className="flex gap-3">
                  <input
                    type="number"
                    value={warrantyDuration}
                    onChange={(e) => setWarrantyDuration(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <select 
                    value={warrantyUnit}
                    onChange={(e) => setWarrantyUnit(e.target.value)}
                    className="w-32 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option>Months</option>
                    <option>Weeks</option>
                    <option>Years</option>
                  </select>
              </div>
            </div>
          )}
          
        </div>
        
        {/* Modal Footer */}
        <div className="flex justify-end p-6 pt-2 bg-white">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-8 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}