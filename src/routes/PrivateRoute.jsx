import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user?.email) {
      navigate("/login", { replace: true, state: { from: location } });
    }
  }, [loading, user, navigate, location]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto bg-white mt-16">
        <h1 className="text-xl text-black">Loading Page....</h1>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  // Optional fallback
  return <div>Redirecting to Sign In...</div>;
};

export default PrivateRoute;
