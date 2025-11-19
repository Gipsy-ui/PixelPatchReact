import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

// Main App component for preview
export default function App() {
  return (
    // We wrap this in a gray background to make the white form visible
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 py-10 font-inter">
      <BusinessSignUpPageThree />
    </div>
  );
}

// Stepper Component
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
            {/* Step Item (Circle + Text) */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                  step.number === currentStep
                    ? 'bg-blue-600 border-blue-600' // Active
                    : step.number < currentStep
                    ? 'bg-white border-blue-600' // Completed
                    : 'border-gray-300 bg-white' // Future
                }`}
              >
                {step.number < currentStep ? (
                  // Completed Checkmark
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Number
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
            
            {/* Connecting Line (if not the last step) */}
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

// Page Three Component
function BusinessSignUpPageThree() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTES.BUSINESS_SIGNUP.STEP2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(ROUTES.BUSINESS_SIGNUP.STEP4);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-2xl mx-auto">
      <Stepper currentStep={4} />
      
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment Details</h1>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Preferred Payment Method */}
          <div>
            <label htmlFor="payment_method" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Payment Method
            </label>
            <select
              id="payment_method"
              name="payment_method"
              className="block w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select Payment Method</option>
              <option value="bank">Bank Transfer</option>
              <option value="e-wallet">E-Wallet (GCash, Maya)</option>
            </select>
          </div>
          
          {/* Account Name */}
          <div>
            <label htmlFor="account_name" className="block text-sm font-medium text-gray-700 mb-1">
              Account Name
            </label>
            <input
              type="text"
              name="account_name"
              id="account_name"
              className="block w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter account name"
            />
          </div>
          
          {/* Account Number */}
          <div>
            <label htmlFor="account_number" className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <input
              type="text"
              name="account_number"
              id="account_number"
              className="block w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter account number"
            />
          </div>
          
          {/* TIN (optional) */}
          <div>
            <label htmlFor="tin" className="block text-sm font-medium text-gray-700 mb-1">
              TIN (optional)
            </label>
            <input
              type="text"
              name="tin"
              id="tin"
              className="block w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your TIN"
            />
          </div>
          
          {/* Checkboxes */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
              />
              <label htmlFor="terms" className="ml-3 block text-sm text-gray-600">
                I confirm that I have read and agree to the <a href="#" className="font-medium text-blue-600 hover:underline">Terms and Conditions</a>.
              </label>
            </div>
            <div className="flex items-start">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
              />
              <label htmlFor="privacy" className="ml-3 block text-sm text-gray-600">
                I consent to the collection and use of my data as outlined in the <a href="#" className="font-medium text-blue-600 hover:underline">Privacy Policy</a>.
              </label>
            </div>
          </div>
          
          {/* Footer Buttons */}
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
    </div>
  );
}