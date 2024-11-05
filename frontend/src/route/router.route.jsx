import { createBrowserRouter, Navigate } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    // <ProtectedRoute>
    // </ProtectedRoute>
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
    // <RedirectAuthenticatedUser>
    // </RedirectAuthenticatedUser>
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
    // <RedirectAuthenticatedUser>
    // </RedirectAuthenticatedUser>
  },
  {
    path: "/verify-email",
    element: <EmailVerificationPage />,
  },
  {
    path: "/forgot-password",
    element: (
      // <RedirectAuthenticatedUser>
      // </RedirectAuthenticatedUser>
      <ForgotPasswordPage />
    ),
  },
  {
    path: "/reset-password/:token",
    element: (
      // <RedirectAuthenticatedUser>
      // </RedirectAuthenticatedUser>
      <ResetPasswordPage />
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
