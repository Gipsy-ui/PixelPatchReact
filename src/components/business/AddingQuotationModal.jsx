import React from 'react';

const AddQuotationModal = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-6 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Add Quotation</h2>
          <button 
            onClick={onClose}
            className="bg-white text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="space-y-5">
          
          {/* Device Details */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Device Details</label>
            <p className="text-lg font-medium text-gray-900">Samsung S25</p>
          </div>

          {/* Findings */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Findings from Assessment</label>
            <p className="text-base font-medium text-gray-900">This phone screen need to be replaced in a delicate manner.</p>
          </div>

          {/* Parts Required */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Parts Required</label>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">S25 Brand New Screen</p>
                <p className="text-xs text-gray-400">x1</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900">Price</span>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    defaultValue="2,500.00"
                    className="w-28 bg-gray-100 border-none rounded px-3 py-2 text-gray-600 text-right focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                  <div className="relative">
                    <select className="bg-gray-100 border-none rounded px-3 py-2 pr-8 text-gray-600 appearance-none focus:ring-1 focus:ring-blue-500 outline-none">
                      <option>PHP</option>
                      <option>USD</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Labor Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Labor Fee</label>
            <div className="flex gap-2 w-full max-w-[250px]"> 
            {/* Note: Screenshot has this aligned left, but inputs match size of price above */}
              <input 
                type="text" 
                defaultValue="2,500.00"
                className="flex-1 bg-gray-100 border-none rounded px-3 py-2 text-gray-600 text-right focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <div className="relative">
                <select className="bg-gray-100 border-none rounded px-3 py-2 pr-8 text-gray-600 appearance-none focus:ring-1 focus:ring-blue-500 outline-none">
                  <option>PHP</option>
                  <option>USD</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Estimated Time */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Estimated Time</label>
            <input 
              type="text" 
              placeholder="MM/DD/YY"
              className="w-1/2 bg-gray-100 border-none rounded px-3 py-2 text-gray-600 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Warranty Checkbox */}
          <div className="flex items-center gap-2 pt-2">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                id="warranty" 
                defaultChecked 
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-blue-500 bg-white checked:bg-blue-500 transition-all"
              />
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label htmlFor="warranty" className="font-bold text-blue-500 cursor-pointer select-none">
              Warranty Included
            </label>
          </div>

          {/* Warranty Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Warranty</label>
            <div className="flex gap-4">
              <input 
                type="number" 
                defaultValue="5"
                className="flex-grow bg-gray-100 border-none rounded px-3 py-2 text-gray-600 pl-4 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <div className="relative w-1/3">
                <select className="w-full bg-gray-100 border-none rounded px-3 py-2 pr-8 text-gray-600 appearance-none focus:ring-1 focus:ring-blue-500 outline-none">
                  <option>Months</option>
                  <option>Years</option>
                  <option>Weeks</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-8 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded transition-colors">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddQuotationModal;