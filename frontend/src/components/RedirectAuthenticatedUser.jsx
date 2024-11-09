import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { ROUTER_URL } from "../route/router.route";

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to={ROUTER_URL.DASHBOARD} replace />;
  }

  return children;
};

export default RedirectAuthenticatedUser;
