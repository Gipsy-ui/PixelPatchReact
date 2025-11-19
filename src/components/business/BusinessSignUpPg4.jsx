import React from 'react';
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 py-10 font-inter">
      <BusinessSignUpPageFour />
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

function BusinessSignUpPageFour() {
  return (
    <div className="w-full max-w-4xl">
      <Stepper currentStep={4} />
      
      {/* Yung Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-lg mx-auto flex flex-col items-center text-center">
        
        {/* Clock Icon Part */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100">
          <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 110-20 10 10 0 010 20z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mt-6">
          Application Under Review
        </h1>
        
        <p className="text-base text-gray-500 mt-4 max-w-xs">
          Your application has been received and is being reviewed. You should receive a decision with 3-5 business days.
        </p>
      </div>
    </div>
  );
}