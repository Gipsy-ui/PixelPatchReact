import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../constants/routes';

const BusinessProfileDropdown = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
    onClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(ROUTES.HOME);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="py-1" role="none">
          {/* Business User Info */}
          <div className="bg-white flex items-center px-4 py-3 border-b border-gray-200 rounded-t-lg">
            <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/e0e7ff/4338ca?text=BZ&font=inter" alt="Business Avatar" />
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-900">Business User</p>
              <p className="text-sm text-gray-500">business@example.com</p>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="py-1">
            <button onClick={() => handleNavigation(ROUTES.BUSINESS.PROFILE)} className="bg-white block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Profile</button>
          </div>

          {/* Switch to Customer */}
          <div className="py-1 border-t border-gray-200">
            <button onClick={() => handleNavigation(ROUTES.DASHBOARD_AI)} className="bg-white block w-full text-left px-4 py-3 text-sm text-blue-600 hover:bg-gray-100">Switch to Customer</button>
          </div>
          {/* Links Section 3 */}
                    <div className="py-1 border-t border-gray-200">
                      <button onClick={() => handleNavigation(ROUTES.SETTINGS)} className="bg-white block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Settings</button>
                      <button onClick={() => handleNavigation(ROUTES.HELP)} className="bg-white block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Help</button>
                    </div>

          {/* Log Out */}
          <div className="py-1 border-t border-gray-200">
            <button onClick={handleLogout} className="bg-white block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100">Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

BusinessProfileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BusinessProfileDropdown;
