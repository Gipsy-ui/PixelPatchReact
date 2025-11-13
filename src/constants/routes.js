export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  AI_ASSISTANT: '/ai-assistant',
  SERVICES: '/services',
  PARTNER: '/partner',
  SHOP: '/shop',
  SHOP_DETAIL: (id) => `/shop/${id}`,
  PROFILE: '/profile',
  LOGIN: '/login',
  SIGNUP: '/signup',
  HELP: '/help',
  ABOUT: '/about',
  CAREERS: '/careers',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  REPAIRS: '/repairs',
  REPAIR_PENDING: '/repairs/:id/pending',
  DEVICES: '/devices',
  SETTINGS: '/settings',

  BUSINESS: {
    DASHBOARD: '/business',
    PROFILE: '/business/profile',
    REPAIRS: '/business/repairs',
     REPAIR_DETAIL: '/business/repairs/:id',
    AWAITING_ASSESSMENT: '/business/repairs/awaiting-assessment',
    REPAIR_ASSESSMENT: '/business/repairs/:id/assessment',
  REPAIR_IN_PROGRESS: '/business/repairs/:id/in-progress',
  REPAIR_DONE: '/business/repairs/:id/done',
  REPAIR_COMPLETED: '/business/repairs/:id/completed',
  REPAIR_REJECTED: '/business/repairs/:id/rejected',
  REPAIR_PENDING: '/business/repairs/:id/pending',
    SERVICES: '/business/services',
    DISCOUNTS: '/business/discounts',
    REVIEWS: '/business/reviews',
    SETTINGS: '/business/settings',
    HELP: '/business/help'
  },
  LOGOUT: '/logout'
};

// Navbar paths 
export const NAV_ITEMS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.AI_ASSISTANT, label: 'AI Assistant' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.PARTNER, label: 'Become a Partner' }
];

// Footer navbar
export const FOOTER_SECTIONS = {
  quickLinks: [
    { path: ROUTES.AI_ASSISTANT, label: 'AI Assistant' },
    { path: ROUTES.SERVICES, label: 'Find Service' },
    { path: ROUTES.SERVICES, label: 'Services' }
  ],
  company: [
    { path: ROUTES.ABOUT, label: 'About' },
    { path: ROUTES.CAREERS, label: 'Career' }
  ],
  support: [
    { path: ROUTES.HELP, label: 'Help Center' },
    { path: ROUTES.TERMS, label: 'Terms of Service' },
    { path: ROUTES.PRIVACY, label: 'Privacy Policy' }
  ],
  social: [
    { url: 'https://facebook.com', label: 'Facebook' },
    { url: 'https://instagram.com', label: 'Instagram' },
    { url: 'https://twitter.com', label: 'X (Twitter)' }
  ]
};