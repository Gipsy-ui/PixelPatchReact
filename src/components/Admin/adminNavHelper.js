import { ROUTES } from '../../constants/routes';

export const getAdminNavHandler = (navigate) => (label) => {
  const routeMap = {
    'Dashboard': ROUTES.ADMIN.DASHBOARD,
    'Reports & Analytics': ROUTES.ADMIN.REPORTS,
    'AI Logs': ROUTES.ADMIN.AI_LOGS,
    'Settings': ROUTES.ADMIN.AI_SETTINGS,
    'Users': ROUTES.ADMIN.USERS_CLIENTS,
    'Verification': ROUTES.ADMIN.VERIFICATION,
    'Transactions': ROUTES.ADMIN.TRANSACTIONS,
    'Support Tickets': ROUTES.ADMIN.SUPPORT_ALL,
  };

  const route = routeMap[label];
  if (route) {
    navigate(route);
  }
};
