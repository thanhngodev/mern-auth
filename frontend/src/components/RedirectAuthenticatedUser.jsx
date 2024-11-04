// import { Navigate } from "react-router-dom";

const RedirectAuthenticatedUser = ({ children }) => {
  //   const { isAuthenticated, user } = useAuthStore();

  //   if (isAuthenticated && user.isVerified) {
  //     return <Navigate to="/" replace />;
  //   }
  console.log(children);

  return <>RedirectAuthenticatedUser</>;
};

export default RedirectAuthenticatedUser;
