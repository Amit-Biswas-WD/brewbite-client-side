import { FcGoogle } from "react-icons/fc";
import useAuth from "./../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Google = () => {
  const { google } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result);
        const redirectTo = location?.state?.from || "/";
        navigate(redirectTo);
        toast("Google login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={handleGoogle}
      className="flex gap-2 items-center btn bg-white text-black shadow-2xl"
    >
      <FcGoogle className="w-7 h-auto" />
      Sign up with Google
    </button>
  );
};

export default Google;
