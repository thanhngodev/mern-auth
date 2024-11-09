import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./route/router.route";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import FloatingShapeList from "./components/FloatingShapeList";

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShapeList />
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
