import {
  FaTwitter,
  FaInstagramSquare,
  FaFacebookF,
  FaTumblr,
} from "react-icons/fa";
import { BsVimeo } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#0a0909] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-6 mx-auto text-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20">
          <div>
            <p className="text-base">
              Designed and developed with ❤️ <br /> by BrewBite Team
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <h2 className="hover:text-[#e7b38d] transition-all duration-300 cursor-pointer">
              Home
            </h2>
            <h2 className="hover:text-[#e7b38d] transition-all duration-300 cursor-pointer">
              All Coffees
            </h2>
            <h2 className="hover:text-[#e7b38d] transition-all duration-300 cursor-pointer">
              Dashboard
            </h2>
            <h2 className="hover:text-[#e7b38d] transition-all duration-300 cursor-pointer">
              Contact
            </h2>
          </div>

          <div className="flex gap-6 justify-center">
            <FaTwitter className="hover:text-[#e7b38d] transition-all duration-300 w-5 h-5" />
            <FaInstagramSquare className="hover:text-[#e7b38d] transition-all duration-300 w-5 h-5" />
            <FaFacebookF className="hover:text-[#e7b38d] transition-all duration-300 w-5 h-5" />
            <BsVimeo className="hover:text-[#e7b38d] transition-all duration-300 w-5 h-5" />
            <FaTumblr className="hover:text-[#e7b38d] transition-all duration-300 w-5 h-5" />
          </div>
        </div>

        <p className="mt-4 text-sm">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
