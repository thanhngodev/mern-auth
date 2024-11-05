import { createBrowserRouter, Navigate } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";

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
  //   {
  //     path: "/forgot-password",
  //     element: (
  //       <RedirectAuthenticatedUser>
  //         <ForgotPasswordPage />
  //       </RedirectAuthenticatedUser>
  //     ),
  //   },
  //   {
  //     path: "/reset-password/:token",
  //     element: (
  //       <RedirectAuthenticatedUser>
  //         <ResetPasswordPage />
  //       </RedirectAuthenticatedUser>
  //     ),
  //   },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
