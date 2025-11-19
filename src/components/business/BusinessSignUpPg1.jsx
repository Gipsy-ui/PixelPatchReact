import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

// Main App component for preview
export default function App() {
  return (
    // We wrap this in a gray background to make the white form visible
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 py-10 font-inter">
      <BusinessSignUpPageOne />
    </div>
  );
}

// Stepper Component (Corrected Version)
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

// File Upload Component
function FileUpload({ title, description, fileType }) {
  return (
    <div>
      {title && <label className="block text-sm font-medium text-gray-700">{title}</label>}
      <div className="mt-1 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 pt-8 pb-8">
        <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label htmlFor={`file-upload-${title || 'default'}`} className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
              <span>Upload Selected Document</span>
              <input id={`file-upload-${title || 'default'}`} name={`file-upload-${title || 'default'}`} type="file" className="sr-only" />
            </label>
          </div>
          <p className="text-xs text-gray-500">Drag and drop or click to upload</p>
        </div>
      </div>
      {description && <p className="text-xs text-gray-500 mt-2">{description}</p>}
      {fileType && <p className="text-xs text-gray-500 mt-2">{fileType}</p>}
    </div>
  );
}

// Business Sign Up - Page One Component
function BusinessSignUpPageOne() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTES.PARTNER);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(ROUTES.BUSINESS_SIGNUP.STEP2);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-6xl mx-auto">
      <Stepper currentStep={2} />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Business Information</h1>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Business Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="business_type" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
            <select id="business_type" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Select</option>
              <option>Sole Proprietorship</option>
              <option>Partnership</option>
              <option>Corporation</option>
            </select>
          </div>
          <div>
            <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input type="text" id="business_name" placeholder="Enter shop name" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="business_email" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
            <input type="email" id="business_email" placeholder="Enter your business email" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
            <div className="flex items-center mt-2">
              <input id="existing_email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="existing_email" className="ml-2 block text-sm text-gray-600">Fill with Existing Account Email</label>
            </div>
          </div>
          <div>
            <label htmlFor="business_phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="business_phone" placeholder="Enter your business phone" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
            <div className="flex items-center mt-2">
              <input id="existing_phone" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="existing_phone" className="ml-2 block text-sm text-gray-600">Fill with Existing Account Phone Number</label>
            </div>
          </div>
        </div>

        {/* Pickup / Shop Address */}
        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pickup / Shop Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-6">
              <select id="region_province_city" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Region, Province, City, Barangay</option>
              </select>
              <input type="text" id="postal_code" placeholder="Postal Code" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
              <select id="street_name" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Street Name, Building</option>
              </select>
            </div>
            <div className="w-full h-64 md:h-full bg-gray-200 rounded-lg">
              <img src="https://placehold.co/600x400/e5e7eb/9ca3af?text=Map+Placeholder" alt="Map Placeholder" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Individual Registered Name */}
        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Individual Registered Name</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="reg_first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" id="reg_first_name" placeholder="Enter your first name" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="reg_middle_name" className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
              <input type="text" id="reg_middle_name" placeholder="Enter your middle name" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="reg_last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" id="reg_last_name" placeholder="Enter your last name" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500" />
              <p className="text-xs text-gray-500 mt-2">Individual Registered Name is your full legal name as written on your government-issued ID.</p>
            </div>
          </div>
        </div>
        
        {/* Operating Hours */}
        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Operating Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="days_in_week" className="block text-sm font-medium text-gray-700 mb-1">Days in Week</label>
              <div className="flex items-center gap-4">
                <select id="days_in_week_from" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
                <span className="text-gray-600">To</span>
                <select id="days_in_week_to" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="office_hours" className="block text-sm font-medium text-gray-700 mb-1">Office Hours</label>
              <div className="flex items-center gap-2">
                <select id="office_hours_from_time" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>07:00</option>
                  <option>08:00</option>
                  <option>09:00</option>
                </select>
                <select id="office_hours_from_am_pm" className="w-auto rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>AM</option>
                  <option>PM</option>
                </select>
                <span className="text-gray-600">To</span>
                <select id="office_hours_to_time" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>09:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                </select>
                <select id="office_hours_to_am_pm" className="w-auto rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>PM</option>
                  <option>AM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="primary_doc" className="block text-sm font-medium text-gray-700 mb-1">Primary Business Document Type</label>
              <select id="primary_doc" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500 mb-4">
                <option>DTI Certificate</option>
                <option>SEC Certificate</option>
              </select>
              <FileUpload title="" description="" fileType="pdf files only" />
            </div>
            <div>
              <label htmlFor="gov_id" className="block text-sm font-medium text-gray-700 mb-1">Government ID</label>
              <select id="gov_id" className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm focus:border-blue-500 focus:ring-blue-500 mb-4">
                <option>PhilID</option>
                <option>Driver's License</option>
                <option>Passport</option>
              </select>
              <FileUpload title="" description="Please submit a clear photo of your Government ID" fileType="" />
            </div>
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
          <button type="submit" className="flex-1 md:flex-none rounded-lg border border-transparent bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}