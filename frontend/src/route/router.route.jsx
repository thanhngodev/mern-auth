import { createBrowserRouter, Navigate } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProtectedRoute from "../components/ProtectedRoute";
import RedirectAuthenticatedUser from "../components/RedirectAuthenticatedUser";

export const ROUTER_URL = {
  DASHBOARD: "/",
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  VERIFY_EMAIL: "/verify-email",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password/:token",
};

const router = createBrowserRouter([
  {
    path: ROUTER_URL.DASHBOARD,
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTER_URL.SIGN_UP,
    element: (
      <RedirectAuthenticatedUser>
        <SignUpPage />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: ROUTER_URL.SIGN_IN,
    element: (
      <RedirectAuthenticatedUser>
        <SignInPage />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: ROUTER_URL.VERIFY_EMAIL,
    element: <EmailVerificationPage />,
  },
  {
    path: ROUTER_URL.FORGOT_PASSWORD,
    element: (
      <RedirectAuthenticatedUser>
        <ForgotPasswordPage />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: ROUTER_URL.RESET_PASSWORD,
    element: (
      <RedirectAuthenticatedUser>
        <ResetPasswordPage />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "*",
    element: <Navigate to={ROUTER_URL.DASHBOARD} replace />,
  },
]);

export default router;
