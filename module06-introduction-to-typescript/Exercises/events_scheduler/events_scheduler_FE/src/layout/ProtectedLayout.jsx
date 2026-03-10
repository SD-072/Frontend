import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/userContext";

const ProtectedLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedLayout;
