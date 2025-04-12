import { Link } from "react-router-dom";
import {
  
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" py-6 md:py-8 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Branding Section */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Tech-Zen. All rights reserved.
            </p>
          </div>

          {/* Quick Links Section */}
          <nav className="flex space-x-4">
            <Link
              to="/privacy"
              className={`text-sm hover:opacity-50 transition-colors duration-300 `}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`text-sm hover:opacity-50 transition-colors duration-300 `}
            >
              Terms of Service
            </Link>
          </nav>

          {/* Social Media Section */}
          <div className="flex space-x-4">
            <a
              href="https://x.com/arifbasha559"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-50 transition-colors duration-300 `}
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/arif_off04"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-50 transition-colors duration-300 `}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/arifbasha559"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-50 transition-colors duration-300 `}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/arifbasha559"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-50 transition-colors duration-300 `}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;