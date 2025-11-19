import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserAvatar = ({ onClick, showDropdown, dropdownContent }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="bg-white flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
      >
        <span className="sr-only">Open user menu</span>
        <img 
          className="h-full w-full object-cover" 
          src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" 
          alt="User avatar" 
        />
      </button>
      {showDropdown && dropdownContent}
    </div>
  );
};

UserAvatar.propTypes = {
  onClick: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool,
  dropdownContent: PropTypes.node
};

UserAvatar.defaultProps = {
  showDropdown: false,
  dropdownContent: null
};

export default UserAvatar;