import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

// Horizontal top navbar items for business layout.
const BUSINESS_NAV_ITEMS = [
  { id: 'dashboard', path: ROUTES.BUSINESS.DASHBOARD, label: 'Dashboard', exact: true },
  { id: 'repairs', path: ROUTES.BUSINESS.REPAIRS, label: 'Repairs' },
  { id: 'services', path: ROUTES.BUSINESS.SERVICES, label: 'Services' },
  { id: 'discounts', path: ROUTES.BUSINESS.DISCOUNTS, label: 'Discounts' },
  { id: 'reviews', path: ROUTES.BUSINESS.REVIEWS, label: 'Reviews' },
  { id: 'settings', path: ROUTES.BUSINESS.SETTINGS, label: 'Settings' },
  { id: 'help', path: ROUTES.BUSINESS.HELP, label: 'Help' },
];

const BusinessNavigation = () => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-center space-x-2">
      {BUSINESS_NAV_ITEMS.map(({ id, path, label, exact }) => (
        <NavLink
          key={id}
          to={path}
          end={exact}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  </div>
);

export default BusinessNavigation;

