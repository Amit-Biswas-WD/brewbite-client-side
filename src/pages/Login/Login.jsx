import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "../../shared/Google/Google";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);

        const redirectTo = location?.state?.from || "/";
        navigate(redirectTo);
        toast("Logged in successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to log in");
      });
  };

  return (
    <div className="bg-[#f5ebe6]">
      <div className="min-h-screen flex items-center justify-center px-4 mt-16 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
            Welcome back
          </h2>
          <div className="flex justify-center text-center items-center text-black">
            <Google />
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <hr className="w-40 text-gray-700" />
            <span className="text-lg font-semibold text-gray-700">or</span>
            <hr className="w-40 text-gray-700" />
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-black text-black rounded-md"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 mt-2 border border-black text-black rounded-md"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <IoIosEye /> : <FaEyeSlash />}
              </p>
            </div>

            <button
              type="submit"
              className="w-full btn border-none bg-[#f59152] hover:bg-[#f59152] text-white py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Create a new account{" "}
            <Link to="/signIn" className="text-[#f59152] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
