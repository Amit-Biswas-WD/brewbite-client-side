import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import Google from "../../shared/Google/Google";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photo.value;
    const password = from.password.value;
    const valueInfo = { name, email, photo, password };
    console.log("User Registered:", valueInfo);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast("Sign In user Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center mt-16 pb-1 bg-[#f3efed]">
      <div className="w-full md:w-1/3 p-8 bg-[#f1e5de]">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
          Sign In
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
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-md border-black text-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md border-black text-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 mt-2 border rounded-md border-black text-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 mt-2 border rounded-md border-black text-black"
              required
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="absolute -mt-7 right-[280px]"
            >
              {showPassword ? <IoIosEye /> : <FaEyeSlash />}
            </p>
          </div>

          <button
            type="submit"
            className="w-full btn border-none bg-[#f59152] text-white py-2 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#f59152] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
