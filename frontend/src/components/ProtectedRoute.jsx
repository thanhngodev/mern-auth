import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  console.log(children);

  return children;
};

export default ProtectedRoute;
