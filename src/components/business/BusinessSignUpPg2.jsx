import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../constants/routes';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 py-10 font-inter">
      <BusinessSignUpPageTwo />
    </div>
  );
}

function Stepper({ currentStep }) {
  const steps = [
    { number: 1, title: 'Account Info' },
    { number: 2, title: 'Business Info' },
    { number: 3, title: 'Services' },
    { number: 4, title: 'Payment' },
  ];

  return (
    <nav className="w-full max-w-3xl mx-auto mb-16" aria-label="Progress">
      <div className="flex items-start">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                  step.number === currentStep
                    ? 'bg-blue-600 border-blue-600'
                    : step.number < currentStep
                    ? 'bg-white border-blue-600'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {step.number < currentStep ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className={`font-semibold ${
                    step.number === currentStep ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.number}
                  </span>
                )}
              </div>
              <p className={`text-xs sm:text-sm font-medium mt-3 text-center w-24 ${
                  step.number <= currentStep ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {step.title}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mt-4 sm:mt-5">
                <div className={`h-full ${
                  step.number < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

function ServiceBlock() {
  return (
    <div className="space-y-6 p-6 border border-blue-500 rounded-lg shadow-md relative">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Information</h3>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select id="category" name="category" className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50">
          <option>Smartphone</option>
          <option>Laptop</option>
          <option>Tablet</option>
        </select>
      </div>

      <div>
        <label htmlFor="repair_service" className="block text-sm font-medium text-gray-700 mb-1">Repair Service</label>
        <input 
          type="text" 
          name="repair_service" 
          id="repair_service"
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50"
          defaultValue="Deep Cleaning"
        />
        <p className="text-xs text-gray-500 mt-2">This is a repair service you provide for the device type selected.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Timeframe</label>
        <div className="flex items-center gap-3">
          <input type="number" className="block w-20 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" defaultValue="2" />
          <span className="text-gray-500">to</span>
          <input type="number" className="block w-20 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" defaultValue="4" />
          <select className="block w-auto rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50">
            <option>Days</option>
            <option>Hours</option>
            <option>Weeks</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Estimated Price</label>
        <div className="flex items-center gap-3">
          <input type="text" id="price" className="block w-40 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" defaultValue="200.00" />
          <select className="block w-auto rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50">
            <option>PHP</option>
            <option>USD</option>
          </select>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Add Another Repair Service
        </button>
      </div>
    </div>
  );
}

function BusinessSignUpPageTwo() {
  const navigate = useNavigate();
  const [serviceBlocks, setServiceBlocks] = useState([1]);

  // ✅ FIX: Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTES.BUSINESS_SIGNUP.STEP3);
  };

  const handleBack = () => {
    navigate(ROUTES.BUSINESS_SIGNUP.STEP1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-4xl mx-auto">
      <Stepper currentStep={3} />

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Services</h1>

      {/* Attach the handler here */}
      <form className="space-y-8" onSubmit={handleSubmit}>

        <div className="space-y-6">
          {serviceBlocks.map(id => (
            <ServiceBlock key={id} />
          ))}
        </div>

        <button 
          type="button" 
          onClick={() => setServiceBlocks([...serviceBlocks, Date.now()])}
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Add Another Category
        </button>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-end gap-4">

          <button
            type="button"
            onClick={handleBack}
            className="flex-1 md:flex-none rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Back
          </button>

          <button
           type="submit"
           className="flex-1 md:flex-none rounded-lg border border-transparent bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
           >
           Continue
          </button>

        </div>
      </form>
    </div>
  );
}
