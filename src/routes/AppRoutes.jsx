import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import ForgotPassword from "../components/auth/ForgotPassword";
import ResetPassword from "../components/auth/ResetPassword";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/forget-password" Component={ForgotPassword} />
        <Route path="/reset-password" Component={ResetPassword} />

        {/* SuperAdmin */}
        {/* <ProtectedRoute path="/dashboard" component={DashboardLayout} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
