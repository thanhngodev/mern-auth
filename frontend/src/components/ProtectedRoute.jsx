import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore";
import { ROUTER_URL } from "../route/router.route";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to={ROUTER_URL.SIGN_IN} replace />;
  }

  if (!user.isVerified) {
    return <Navigate to={ROUTER_URL.VERIFY_EMAIL} replace />;
  }

  return children;
};

export default ProtectedRoute;
