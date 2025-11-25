import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrench, Percent, Star, Settings as Cog, HelpCircle } from 'lucide-react';
import { ROUTES } from '../../constants/routes';

export default function ShopServiceDetail() {

  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/shop/details");
  };

  return (
    <div className="flex bg-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        <main className="p-8 flex-grow">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-600 max-w-3xl mx-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-900">Service Details</h1>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Save
              </button>
            </div>

            {/* FORM */}
            <form className="space-y-6 pt-6">

              {/* CATEGORY */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="block w-full border border-gray-400 rounded-lg px-3 py-2 text-gray-900"
                >
                  <option>Smartphone</option>
                  <option>Laptop</option>
                  <option>Tablet</option>
                </select>
              </div>

              {/* REPAIR SERVICE */}
              <div>
                <label htmlFor="repair_service" className="block text-sm font-medium text-gray-700 mb-1">
                  Repair Service
                </label>
                <input
                  id="repair_service"
                  name="repair_service"
                  className="block w-full border border-gray-400 rounded-lg px-3 py-2"
                  defaultValue="Screen Replacement"
                />
              </div>

              {/* TIME FIELDS */}
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Time
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      className="w-24 border border-gray-400 rounded-lg px-3 py-2"
                      defaultValue={2}
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      className="w-24 border border-gray-400 rounded-lg px-3 py-2"
                      defaultValue={4}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <select
                    className="block w-32 border border-gray-400 rounded-lg px-3 py-2"
                    defaultValue="Days"
                  >
                    <option>Days</option>
                    <option>Hours</option>
                  </select>
                </div>
              </div>

              {/* PRICE */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Price
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="price"
                    name="price"
                    className="block w-40 border border-gray-400 rounded-lg px-3 py-2"
                    defaultValue="200.00"
                  />
                  <select
                    className="block w-32 border border-gray-400 rounded-lg px-3 py-2"
                    defaultValue="PHP"
                  >
                    <option>PHP</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
}