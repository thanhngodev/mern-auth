// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //   const { isAuthenticated, user } = useAuthStore();

  //   if (!isAuthenticated) {
  //     return <Navigate to="/login" replace />;
  //   }

  //   if (!user.isVerified) {
  //     return <Navigate to="/verify-email" replace />;
  //   }
  console.log(children);

  return <>ProtectedRoute</>;
};

export default ProtectedRoute;
