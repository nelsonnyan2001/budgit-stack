import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import SignUp from "./pages/SignUp/SignUp";
import Onboarding from "./pages/Onboarding/Onboarding";
import Expenses from "./pages/Expenses/Expenses";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import Retirement from "./pages/Retirement/Retirement";
import Churning from "./pages/Churning/Churning";
import OnboardingLayout from "./layouts/OnboardingLayout/OnboardingLayout";
import Setup from "./pages/Setup/Setup";
import AuthedLayout from "./layouts/AuthedLayout/AuthedLayout";
import ConfirmSignUp from "./pages/ConfirmSignUp/ConfirmSignUp";

const RoutingComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/confirm-sign-up/:userId" element={<ConfirmSignUp />} />
    </Route>
    <Route element={<AuthedLayout />}>
      <Route element={<OnboardingLayout />}>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/setup" element={<Setup />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/retirement" element={<Retirement />} />
        <Route path="/churning" element={<Churning />} />
      </Route>
    </Route>
  </Routes>
);

export default RoutingComponent;
