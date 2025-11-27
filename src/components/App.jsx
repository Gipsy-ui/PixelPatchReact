import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import ErrorBoundary from "./components/shared/ErrorBoundary";

// Layouts
import AppLayout from "./components/shared/AppLayout";
import BusinessLayout from "./components/shared/BusinessLayout";
import ClientLayout from "./components/shared/ClientLayout"; // Make sure this is imported!

// Client pages
import Home from "./components/Home";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import BecomePartner from "./components/BecomePartner";
import ShopProfile from "./components/ShopProfile";
import UserProfile from "./components/UserProfile";
import AccountSignUp from "./components/AccountSignUp";
import BusinessSignUpPg1 from "./components/business/BusinessSignUpPg1";
import BusinessSignUpPg2 from "./components/business/BusinessSignUpPg2";
import BusinessSignUpPg3 from "./components/business/BusinessSignUpPg3";
import BusinessSignUpPg4 from "./components/business/BusinessSignUpPg4";
import ClientBooking from "./components/Client-Booking";
import ClientRepairRequestModalPage from "./components/ClientRepairRequestModalPage";
import ClientPaymentDetailsModal from "./components/Repairs/PaymentDetailsModal";
import EmailVerifyPage from "./components/EmailVerifyPage";
import RegistrationPopUp from "./components/RegistrationPopUp";
import ReviewModalOnly from "./components/ReviewModalOnly";
import Repairs from "./components/Repairs/Repairs";
import RepairPending from "./components/Repairs/RepairsPending";
import RepairAccepted from "./components/Repairs/RepairsAccepted";
import RepairInProgress from "./components/Repairs/RepairsInProgress";
import RepairDone from "./components/Repairs/RepairsDone";
import ClientRepairCompleted from "./components/Repairs/RepairsCompleted";
import ClientRepairRejected from "./components/Repairs/RepairsRejected";
import Settings from "./components/Settings";
import Help from "./components/Help";
import About from "./components/About";
import Devices from "./components/Devices";
import ShopCreateVoucher from "./components/Shop/CreateVoucher";
import ShopDetails from "./components/Shop/Details";
import ShopDetailsEditable from "./components/Shop/DetailsEditable";
import ShopDiscounts from "./components/Shop/Discounts";
import ShopDiscountModalRoute from "./components/Shop/ShopDiscountModal";
import ShopReview from "./components/Shop/Review";
import ShopService from "./components/Shop/Service";
import ClientAiLanding from "./components/HomeLoggedInAI";
import ClientAIAssistant from "./components/ClientAIChat";
import PixelPatchLanding from "./components/HomeLoggedInAIBefore";
import ClientMessages from "./components/Messages";

// Business pages
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

import BusinessDashboard from "./components/business/BusinessDashboard";
import BusinessSettings from "./components/business/BusinessSettings";
import BusinessHelp from "./components/business/BusinessHelp";
import BusinessServices from "./components/business/BusinessServices";
import BusinessDiscounts from "./components/business/BusinessDiscounts";
import BusinessReviews from "./components/business/BusinessReviews";
import BusinessProfile from "./components/business/BusinessProfile";
import ServiceAddDelete from "./components/business/ServiceAdd&Delete";
import ServiceDetail from "./components/business/ServiceDetail";
import RepairRejectionModalRoute from "./components/business/RepairRejectionModalRoute";
import RepairAssessmentModalRoute from "./components/business/RepairAssessmentModalRoute";
import RepairQuotationModalRoute from "./components/business/RepairQuotationModalRoute";
import RepairExtensionModalRoute from "./components/business/RepairExtensionModalRoute";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>

          {/* CLIENT ROUTES */}
          {/* <Route element={<AppLayout />}> */}
            <Route element={<ClientLayout />}>

              <Route path={ROUTES.DASHBOARD_AI} element={<ClientAiLanding />} />
              <Route path={ROUTES.AI_ASSISTANT} element={<ClientAIAssistant />} />
              <Route path={ROUTES.MESSAGES} element={<ClientMessages />} />
              <Route path={ROUTES.SERVICES} element={<Services />} />
              <Route path={ROUTES.PARTNER} element={<BecomePartner />} />
              <Route path={ROUTES.ACCOUNT_SIGNUP} element={<AccountSignUp />} />

              {/* Business signup steps */}
              <Route path={ROUTES.BUSINESS_SIGNUP.STEP1} element={<BusinessSignUpPg1 />} />
              <Route path={ROUTES.BUSINESS_SIGNUP.STEP2} element={<BusinessSignUpPg2 />} />
              <Route path={ROUTES.BUSINESS_SIGNUP.STEP3} element={<BusinessSignUpPg3 />} />
              <Route path={ROUTES.BUSINESS_SIGNUP.STEP4} element={<BusinessSignUpPg4 />} />

              {/* Client modals */}
              <Route path={ROUTES.CLIENT_BOOKING} element={<ClientBooking />} />
              <Route path={ROUTES.CLIENT_REPAIR_REQUEST_MODAL} element={<ClientRepairRequestModalPage />} />
              <Route path={ROUTES.CLIENT_PAYMENT_DETAILS_MODAL} element={<ClientPaymentDetailsModal />} />

              <Route path={ROUTES.EMAIL_VERIFY} element={<EmailVerifyPage />} />
              <Route path={ROUTES.REGISTRATION_POPUP} element={<RegistrationPopUp />} />
              <Route path={ROUTES.REVIEW_MODAL} element={<ReviewModalOnly />} />

              {/* Shop */}
              <Route path={ROUTES.SHOP_DETAIL_PATH} element={<ShopProfile />} />
              <Route path={ROUTES.SHOP_MANAGEMENT.CREATE_VOUCHER} element={<ShopCreateVoucher />} />
              <Route path={ROUTES.SHOP_MANAGEMENT.DETAILS_EDITABLE} element={<ShopDetailsEditable />} />
              <Route path={ROUTES.SHOP_MANAGEMENT.DISCOUNTS} element={<ShopDiscounts />} />
              <Route path={ROUTES.SHOP_MANAGEMENT.DISCOUNTS_MODAL} element={<ShopDiscountModalRoute />} />
              <Route path={ROUTES.SHOP_MANAGEMENT.REVIEW} element={<ShopReview />} />
              <Route path={ROUTES.SHOP_MANAGEMENT.SERVICE} element={<ShopService />} />

              <Route path={ROUTES.PROFILE} element={<UserProfile />} />
              <Route path={ROUTES.SETTINGS} element={<Settings />} />
              <Route path={ROUTES.HELP} element={<Help />} />
              <Route path={ROUTES.ABOUT} element={<About />} />

              {/* Repairs */}
              <Route path={ROUTES.REPAIRS} element={<Repairs />} />
              <Route path={ROUTES.REPAIR_PENDING} element={<RepairPending />} />
              <Route path={ROUTES.REPAIRS_PENDING_LIST} element={<RepairPending />} />
              <Route path={ROUTES.REPAIRS_ACCEPTED} element={<RepairAccepted />} />
              <Route path={ROUTES.REPAIRS_IN_PROGRESS} element={<RepairInProgress />} />
              <Route path={ROUTES.REPAIRS_REJECTED} element={<ClientRepairRejected />} />
              <Route path={ROUTES.REPAIRS_DONE} element={<RepairDone />} />
              <Route path={ROUTES.REPAIRS_COMPLETED} element={<ClientRepairCompleted />} />

              <Route path={ROUTES.DEVICES} element={<Devices />} />

              <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />

            </Route>
          {/* </Route> */}

          {/* BUSINESS ROUTES */}
          <Route element={<BusinessLayout />}>
            <Route path={ROUTES.BUSINESS.DASHBOARD} element={<BusinessDashboard />} />
            <Route path={ROUTES.BUSINESS.PROFILE} element={<BusinessProfile />} />
            <Route path={ROUTES.BUSINESS.REPAIRS} element={<BusinessRepairs />} />
            <Route path={ROUTES.SHOP_MANAGEMENT.DETAILS} element={<ShopDetails />} />
            <Route path={ROUTES.BUSINESS.REPAIR_DETAIL} element={<RepairDetails />} />
            <Route path={ROUTES.BUSINESS.REPAIR_PENDING} element={<BusinessRepairPending />} />
            <Route path={ROUTES.BUSINESS.REPAIR_REJECTED} element={<RepairRejected />} />
            <Route path={ROUTES.BUSINESS.AWAITING_ASSESSMENT} element={<RepairAwaitingAssessment />} />
            <Route path={ROUTES.BUSINESS.REPAIR_ASSESSMENT_NO_QUOTATION} element={<RepairAssessmentNoQuotation />} />
            <Route path={ROUTES.BUSINESS.REPAIR_IN_PROGRESS} element={<BusinessRepairInProgress />} />
            <Route path={ROUTES.BUSINESS.REPAIR_DONE} element={<BusinessRepairDone />} />
            <Route path={ROUTES.BUSINESS.REPAIR_COMPLETED} element={<RepairCompleted />} />
            <Route path={ROUTES.BUSINESS.REPAIR_REJECT_MODAL} element={<RepairRejectionModalRoute />} />
            <Route path={ROUTES.BUSINESS.REPAIR_ASSESSMENT_MODAL} element={<RepairAssessmentModalRoute />} />
            <Route path={ROUTES.BUSINESS.REPAIR_QUOTATION_MODAL} element={<RepairQuotationModalRoute />} />
            <Route path={ROUTES.BUSINESS.REPAIR_EXTENSION_MODAL} element={<RepairExtensionModalRoute />} />
            <Route path={ROUTES.BUSINESS.SERVICES} element={<BusinessServices />} />
            <Route path={ROUTES.BUSINESS.SERVICE_ADD_DELETE} element={<ServiceAddDelete />} />
            <Route path={ROUTES.BUSINESS.SERVICE_DETAIL} element={<ServiceDetail />} />
            <Route path={ROUTES.BUSINESS.DISCOUNTS} element={<BusinessDiscounts />} />
            <Route path={ROUTES.BUSINESS.REVIEWS} element={<BusinessReviews />} />
            <Route path={ROUTES.BUSINESS.SETTINGS} element={<BusinessSettings />} />
            <Route path={ROUTES.BUSINESS.HELP} element={<BusinessHelp />} />
          </Route>

          {/* PAGES WITH NO NAVBAR */}
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DASHBOARD_AI_BEFORE} element={<PixelPatchLanding />} />
          <Route path={ROUTES.MESSAGES} element={<ClientMessages />} />

        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
