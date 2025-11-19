export const ROUTES = {
  HOME: '/',
  DASHBOARD_AI_BEFORE:'/dashboard-ai-before',
  DASHBOARD_AI: '/dashboard-ai',
  SERVICES: '/services',
  PARTNER: '/partner',
  SHOP: '/shop',
  SHOP_DETAIL: (id = ':id') => `/shop/${id}`,
  SHOP_DETAIL_PATH: '/shop/:id',
  SHOP_MANAGEMENT: {
    CREATE_VOUCHER: '/shop/create-voucher',
    DETAILS: '/shop/details',
    DETAILS_EDITABLE: '/shop/details/edit',
    DISCOUNTS: '/shop/discounts',
    REVIEW: '/shop/review',
    SERVICE: '/shop/service',
  },
  
  PROFILE: '/profile',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ACCOUNT_SIGNUP: '/account-sign-up',

  BUSINESS_SIGNUP: {
    STEP1: '/business-sign-up/step-1',
    STEP2: '/business-sign-up/step-2',
    STEP3: '/business-sign-up/step-3',
    STEP4: '/business-sign-up/step-4',
  },
  EMAIL_VERIFY: '/verify-email',
  CLIENT_BOOKING: '/client-booking',
  REGISTRATION_POPUP: '/registration',
  REVIEW_MODAL: '/review-modal',
  HELP: '/help',
  ABOUT: '/about',
  CAREERS: '/careers',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  REPAIRS: '/repairs',
  REPAIR_PENDING: '/repairs/:id/pending',
  REPAIRS_PENDING_LIST: '/repairs/pending',
  REPAIRS_ACCEPTED: '/repairs/accepted',
  REPAIRS_IN_PROGRESS: '/repairs/in-progress',
  REPAIRS_DONE: '/repairs/done',
  REPAIRS_FINISHED: '/repairs/finished',
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
    HELP: '/business/help',
  },
  LOGOUT: '/logout',
};

// Navbar paths 
export const NAV_ITEMS = [
  { id: 'home', path: ROUTES.DASHBOARD_AI, label: 'Home', exact: true },
  { id: 'services', path: ROUTES.SERVICES, label: 'Services' },
  { id: 'partner', path: ROUTES.PARTNER, label: 'Become a Partner' }
];

// Footer navbar
export const FOOTER_SECTIONS = {
  quickLinks: [
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