import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const ProfileDropdown = ({ isOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const user =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));

  const isBusiness = user?.role === "business";

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">

      {/* USER INFO */}
      <div className="flex items-center px-4 py-3 border-b bg-gray-50">
        <div className="h-10 w-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold">
          {user?.first_name?.[0]}
          {user?.last_name?.[0]}
        </div>

        <div className="ml-3">
          <p className="text-sm font-semibold">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* LINKS */}
      <div className="py-1">
        <Link to={ROUTES.PROFILE} className="block px-4 py-3 hover:bg-gray-100">Profile</Link>
        <Link to={ROUTES.REPAIRS} className="block px-4 py-3 hover:bg-gray-100">Repairs</Link>
        <Link to={ROUTES.DEVICES} className="block px-4 py-3 hover:bg-gray-100">Devices</Link>
        <Link to="/ai-assistant" className="block px-4 py-3 hover:bg-gray-100">AI Assistant</Link>
      </div>

      {/* BUSINESS REGISTRATION */}
      <div className="border-t py-1">
        {!isBusiness ? (
          <Link
            to={ROUTES.BUSINESS_SIGNUP.STEP1}
            className="block px-4 py-3 text-blue-600 hover:bg-gray-100"
          >
            Register as Business
          </Link>
        ) : (
          <Link
            to={ROUTES.BUSINESS.DASHBOARD}
            className="block px-4 py-3 text-blue-600 hover:bg-gray-100"
          >
            Switch to Business
          </Link>
        )}
      </div>

      {/* SETTINGS */}
      <div className="border-t py-1">
        <Link to={ROUTES.SETTINGS} className="block px-4 py-3 hover:bg-gray-100">Settings</Link>
        <Link to={ROUTES.HELP} className="block px-4 py-3 hover:bg-gray-100">Help</Link>
      </div>

      {/* LOG OUT */}
      <div className="border-t py-1">
        <button
          onClick={handleLogout}
          className=" bg-white w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
