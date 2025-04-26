import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#f1d9cc] text-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-medium mb-4">
          &copy; 2025 BrewBite. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-brown-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-brown-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-brown-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-brown-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>
        <p className="text-sm text-black">
          Designed and developed with ❤️ by BrewBite Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
