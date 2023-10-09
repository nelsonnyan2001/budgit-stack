import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import AuthLayout from "./layouts/AuthLayout";
import SignUp from "./pages/SignUp/SignUp";

const RoutingComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  </Routes>
);

export default RoutingComponent;
