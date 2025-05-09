import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { HashLoader } from "react-spinners";

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
      <div className="min-h-screen flex justify-center items-center">
        <HashLoader color="#7b4f29" size={80} speedMultiplier={1.5} />
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
