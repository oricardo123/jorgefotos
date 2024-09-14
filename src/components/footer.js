import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0 basis-46">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto mb-3"
            />
            <p className="text-sm">
              © {new Date().getFullYear()} Jorge Photografy. 
            </p>
            <p className="text-sm">All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 ">
            <Link to="/" className="hover:text-white text-sm">
              Home
            </Link>
            <Link to="/about" className="hover:text-white text-sm">
              About Us
            </Link>
            <Link to="/portfolio" className="hover:text-white text-sm">
              Portfolio
            </Link>
            <Link to="/contact" className="hover:text-white text-sm">
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            {/* Existing Social Media Links */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/1234567890" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
