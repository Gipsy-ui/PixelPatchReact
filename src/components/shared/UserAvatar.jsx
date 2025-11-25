import PropTypes from "prop-types";

const UserAvatar = ({ onClick, showDropdown, dropdownContent }) => {
  const user =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));

  const firstName = user?.first_name || "";
  const lastName = user?.last_name || "";

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="
          flex items-center justify-center
          h-10 w-10 rounded-full overflow-hidden
          border-2 border-gray-200 hover:border-blue-500
          bg-white dark:bg-white dark:border-gray-200
          transition-colors
        "
      >
        <span className="sr-only">Open user menu</span>

        <img
          className="h-full w-full object-cover rounded-full"
          src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=dbeafe&color=1e40af`}
          alt="User Avatar"
        />
      </button>

      {showDropdown && dropdownContent}
    </div>
  );
};

UserAvatar.propTypes = {
  onClick: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool,
  dropdownContent: PropTypes.node,
};

UserAvatar.defaultProps = {
  showDropdown: false,
  dropdownContent: null,
};

export default UserAvatar;
