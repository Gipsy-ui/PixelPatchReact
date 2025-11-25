import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import AppLayout from "./components/shared/AppLayout";

/* ---------- MAIN PAGES ---------- */
import Home from "./components/Home"; // Your AI Landing Page
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Services from "./components/Services";
import BecomePartner from "./components/BecomePartner";
import ShopProfile from "./components/ShopProfile";
import UserProfile from "./components/UserProfile";
import AccountSignUp from "./components/AccountSignUp";

/* ---------- BUSINESS SIGNUP ---------- */
import BusinessSignUpPg1 from "./components/business/BusinessSignUpPg1";
import BusinessSignUpPg2 from "./components/business/BusinessSignUpPg2";
import BusinessSignUpPg3 from "./components/business/BusinessSignUpPg3";
import BusinessSignUpPg4 from "./components/business/BusinessSignUpPg4";

/* ---------- CLIENT FEATURES ---------- */
import ClientBooking from "./components/Client-Booking";
import ClientRepairRequestModalPage from "./components/ClientRepairRequestModalPage";
import EmailVerifyPage from "./components/EmailVerifyPage";
import RegistrationPopUp from "./components/RegistrationPopUp";
import ReviewModalOnly from "./components/ReviewModalOnly";

/* ---------- CLIENT REPAIRS ---------- */
import Repairs from "./components/Repairs/Repairs";
import RepairPending from "./components/Repairs/RepairsPending";
import RepairAccepted from "./components/Repairs/RepairsAccepted";
import RepairInProgress from "./components/Repairs/RepairsInProgress";
import RepairDone from "./components/Repairs/RepairsDone";
import ClientRepairCompleted from "./components/Repairs/RepairsCompleted";

/* ---------- SHOP ---------- */
import ShopCreateVoucher from "./components/Shop/CreateVoucher";
import ShopDetails from "./components/Shop/Details";
import ShopDetailsEditable from "./components/Shop/DetailsEditable";
import ShopDiscounts from "./components/Shop/Discounts";
import ShopReview from "./components/Shop/Review";
import ShopService from "./components/Shop/Service";

/* ---------- OTHER USER FEATURES ---------- */
import Settings from "./components/Settings";
import Help from "./components/Help";
import About from "./components/About";
import Devices from "./components/Devices";

/* ---------- BUSINESS FEATURES ---------- */
import BusinessDashboard from "./components/business/BusinessDashboard";
import BusinessSettings from "./components/business/BusinessSettings";
import BusinessHelp from "./components/business/BusinessHelp";
import BusinessServices from "./components/business/BusinessServices";
import BusinessDiscounts from "./components/business/BusinessDiscounts";
import BusinessReviews from "./components/business/BusinessReviews";
import BusinessProfile from "./components/business/BusinessProfile";

/* ---------- CHATBOT ---------- */
import ClientMessages from "./components/Messages";

/* ---------- BUSINESS ROUTES ---------- */
import { businessRoutes } from "./components/business/routes";
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

          {/* ---------- PUBLIC (NO LAYOUT) ---------- */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />

          {/* ---------- EVERYTHING ELSE USES LAYOUT ---------- */}
          <Route element={<AppLayout />}>

            {/* ---------- HOME / AI LANDING PAGE ---------- */}
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="/ai" element={<Home />} />

            {/* ---------- MESSAGING / AI ---------- */}
            <Route path={ROUTES.MESSAGES} element={<ClientMessages />} />

            {/* ---------- GENERAL PAGES ---------- */}
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.PARTNER} element={<BecomePartner />} />

            {/* ---------- SIGNUP FLOW ---------- */}
            <Route path={ROUTES.ACCOUNT_SIGNUP} element={<AccountSignUp />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP1} element={<BusinessSignUpPg1 />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP2} element={<BusinessSignUpPg2 />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP3} element={<BusinessSignUpPg3 />} />
            <Route path={ROUTES.BUSINESS_SIGNUP.STEP4} element={<BusinessSignUpPg4 />} />

            {/* ---------- USER FEATURES ---------- */}
            <Route path={ROUTES.CLIENT_BOOKING} element={<ClientBooking />} />
            <Route path={ROUTES.CLIENT_REPAIR_REQUEST_MODAL} element={<ClientRepairRequestModalPage />} />
            <Route path={ROUTES.EMAIL_VERIFY} element={<EmailVerifyPage />} />
            <Route path={ROUTES.REGISTRATION_POPUP} element={<RegistrationPopUp />} />
            <Route path={ROUTES.REVIEW_MODAL} element={<ReviewModalOnly />} />

            {/* ---------- REPAIRS ---------- */}
            <Route path={ROUTES.REPAIRS} element={<Repairs />} />
            <Route path={ROUTES.REPAIR_PENDING} element={<RepairPending />} />
            <Route path={ROUTES.REPAIRS_ACCEPTED} element={<RepairAccepted />} />
            <Route path={ROUTES.REPAIRS_IN_PROGRESS} element={<RepairInProgress />} />
            <Route path={ROUTES.REPAIRS_REJECTED} element={<RepairRejected />} />
            <Route path={ROUTES.REPAIRS_DONE} element={<RepairDone />} />
            <Route path={ROUTES.REPAIRS_COMPLETED} element={<ClientRepairCompleted />} />

            {/* ---------- SHOP ---------- */}
            <Route path={ROUTES.SHOP_DETAIL_PATH} element={<ShopProfile />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.CREATE_VOUCHER} element={<ShopCreateVoucher />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DETAILS} element={<ShopDetails />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DETAILS_EDITABLE} element={<ShopDetailsEditable />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DISCOUNTS} element={<ShopDiscounts />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.REVIEW} element={<ShopReview />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.SERVICE} element={<ShopService />} />

            {/* ---------- USER ACCOUNT ---------- */}
            <Route path={ROUTES.PROFILE} element={<UserProfile />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.HELP} element={<Help />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.DEVICES} element={<Devices />} />

            {/* ---------- BUSINESS ---------- */}
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

            {/* ---------- NOT FOUND ---------- */}
            <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
