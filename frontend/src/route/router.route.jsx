// import { createBrowserRouter, Navigate } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
// import RedirectAuthenticatedUser from "./components/RedirectAuthenticatedUser";
// import DashboardPage from "./pages/DashboardPage";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";
// import EmailVerificationPage from "./pages/EmailVerificationPage";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import ResetPasswordPage from "./pages/ResetPasswordPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <DashboardPage />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/signup",
//     element: (
//       <RedirectAuthenticatedUser>
//         <SignUpPage />
//       </RedirectAuthenticatedUser>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <RedirectAuthenticatedUser>
//         <LoginPage />
//       </RedirectAuthenticatedUser>
//     ),
//   },
//   {
//     path: "/verify-email",
//     element: <EmailVerificationPage />,
//   },
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
//   {
//     path: "*",
//     element: <Navigate to="/" replace />,
//   },
// ]);

// export default router;
