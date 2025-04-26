import { FcGoogle } from "react-icons/fc";
import useAuth from "./../../hooks/useAuth";

const Google = () => {
  const { google } = useAuth();

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleGoogle} className="flex gap-2 items-center btn bg-white text-black shadow-2xl">
      <FcGoogle className="w-7 h-auto" />
      Sign up with Google
    </button>
  );
};

export default Google;
