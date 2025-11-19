import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/routes';
import ErrorBoundary from './components/shared/ErrorBoundary';
import AppLayout from './components/shared/AppLayout';
import Home from './components/Home';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BecomePartner from './components/BecomePartner';
import ShopProfile from './components/ShopProfile';
import UserProfile from './components/UserProfile';
import AccountSignUp from './components/AccountSignUp';
import BusinessSignUpPg1 from './components/business/BusinessSignUpPg1';
import BusinessSignUpPg2 from './components/business/BusinessSignUpPg2';
import BusinessSignUpPg3 from './components/business/BusinessSignUpPg3';
import BusinessSignUpPg4 from './components/business/BusinessSignUpPg4';
import ClientBooking from './components/Client-Booking';
import EmailVerifyPage from './components/EmailVerifyPage';
import RegistrationPopUp from './components/RegistrationPopUp';
import ReviewModalOnly from './components/ReviewModalOnly';
import Repairs from './components/Repairs/Repairs';
import RepairPending from './components/Repairs/RepairPending';
import RepairAccepted from './components/Repairs/RepairAccepted';
import RepairInProgress from './components/Repairs/RepairInProgress';
import RepairDone from './components/Repairs/RepairDone';
import RepairFinished from './components/Repairs/RepairFinished';
import ShopCreateVoucher from './components/Shop/CreateVoucher';
import ShopDetails from './components/Shop/Details';
import ShopDetailsEditable from './components/Shop/DetailsEditable';
import ShopDiscounts from './components/Shop/Discounts';
import ShopReview from './components/Shop/Review';
import ShopService from './components/Shop/Service';
import BusinessDashboard from './components/business/BusinessDashboard';
import Settings from './components/Settings';
import Help from './components/Help';
import About from './components/About';
import Devices from './components/Devices';
import BusinessSettings from './components/business/BusinessSettings';
import BusinessHelp from './components/business/BusinessHelp';
import BusinessServices from './components/business/BusinessServices';
import BusinessDiscounts from './components/business/BusinessDiscounts';
import BusinessReviews from './components/business/BusinessReviews';
import BusinessProfile from './components/business/BusinessProfile';
import ClientAiLanding from './components/HomeLoggedInAI';
import PixelPatchLanding from './components/HomeLoggedInAIBefore';
// Import business section components
import { businessRoutes } from './components/business/routes';
const {
  Repairs: BusinessRepairs,
  RepairDetails,
  RepairPending: BusinessRepairPending,
  RepairAwaitingAssessment,
  RepairAssessmentNoQuotation,
  RepairInProgress: BusinessRepairInProgress,
  RepairDone: BusinessRepairDone,
  RepairRejected,
  RepairCompleted,
} = businessRoutes;

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.DASHBOARD_AI} element={<ClientAiLanding />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.PARTNER} element={<BecomePartner />} />
            <Route path={ROUTES.ACCOUNT_SIGNUP} element={<AccountSignUp />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP1} element={<BusinessSignUpPg1 />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP2} element={<BusinessSignUpPg2 />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP3} element={<BusinessSignUpPg3 />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP4} element={<BusinessSignUpPg4 />} />
            <Route path={ROUTES.CLIENT_BOOKING} element={<ClientBooking />} />
            <Route path={ROUTES.EMAIL_VERIFY} element={<EmailVerifyPage />} />
            <Route path={ROUTES.REGISTRATION_POPUP} element={<RegistrationPopUp />} />
            <Route path={ROUTES.REVIEW_MODAL} element={<ReviewModalOnly />} />
            <Route path={ROUTES.SHOP_DETAIL_PATH} element={<ShopProfile />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.CREATE_VOUCHER} element={<ShopCreateVoucher />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DETAILS} element={<ShopDetails />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DETAILS_EDITABLE} element={<ShopDetailsEditable />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DISCOUNTS} element={<ShopDiscounts />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.REVIEW} element={<ShopReview />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.SERVICE} element={<ShopService />} />
            <Route path={ROUTES.PROFILE} element={<UserProfile />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.HELP} element={<Help />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.REPAIRS} element={<Repairs />} />
            <Route path={ROUTES.REPAIR_PENDING} element={<RepairPending />} />
            <Route path={ROUTES.REPAIRS_PENDING_LIST} element={<RepairPending />} />
            <Route path={ROUTES.REPAIRS_ACCEPTED} element={<RepairAccepted />} />
            <Route path={ROUTES.REPAIRS_IN_PROGRESS} element={<RepairInProgress />} />
            <Route path={ROUTES.REPAIRS_DONE} element={<RepairDone />} />
            <Route path={ROUTES.REPAIRS_FINISHED} element={<RepairFinished />} />
            <Route path={ROUTES.DEVICES} element={<Devices />} />

            {/* Business Routes */}
            <Route path={ROUTES.BUSINESS.DASHBOARD} element={<BusinessDashboard />} />
            <Route path={ROUTES.BUSINESS.PROFILE} element={<BusinessProfile />} />
            <Route path={ROUTES.BUSINESS.REPAIRS} element={<BusinessRepairs />} />
            <Route path={ROUTES.BUSINESS.REPAIR_DETAIL} element={<RepairDetails />} />
            <Route path={ROUTES.BUSINESS.REPAIR_PENDING} element={<BusinessRepairPending />} />
            <Route path={ROUTES.BUSINESS.REPAIR_REJECTED} element={<RepairRejected />} />
            <Route path={ROUTES.BUSINESS.AWAITING_ASSESSMENT} element={<RepairAwaitingAssessment />} />
            <Route path={ROUTES.BUSINESS.REPAIR_ASSESSMENT} element={<RepairAssessmentNoQuotation />} />
            <Route path={ROUTES.BUSINESS.REPAIR_IN_PROGRESS} element={<BusinessRepairInProgress />} />
            <Route path={ROUTES.BUSINESS.REPAIR_DONE} element={<BusinessRepairDone />} />
            <Route path={ROUTES.BUSINESS.REPAIR_COMPLETED} element={<RepairCompleted />} />
            <Route path={ROUTES.BUSINESS.SERVICES} element={<BusinessServices />} />
            <Route path={ROUTES.BUSINESS.DISCOUNTS} element={<BusinessDiscounts />} />
            <Route path={ROUTES.BUSINESS.REVIEWS} element={<BusinessReviews />} />
            <Route path={ROUTES.BUSINESS.SETTINGS} element={<BusinessSettings />} />
            <Route path={ROUTES.BUSINESS.HELP} element={<BusinessHelp />} />

            <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
          </Route>
          {/* <Route>
            <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          </Route> */}
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DASHBOARD_AI_BEFORE} element={<PixelPatchLanding />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
