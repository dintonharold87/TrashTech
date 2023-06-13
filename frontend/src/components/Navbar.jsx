import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-beigeLight shadow fixed top-0 left-0 right-0 z-50 border-b border-greenLight">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="Logo" />
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-greenDark rounded-md outline-none focus:border-greenDark focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-greenDark"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-greenDark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-greenDark font-medium text-base font-sans capitalize hover:text-greenLight">
                <Link to="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="text-greenDark font-medium text-base capitalize font-sans hover:text-greenLight">
                <Link to="/about" onClick={() => setNavbar(!navbar)}>
                  About Us
                </Link>
              </li>
              <li className="text-greenDark font-medium text-base capitalize font-sans hover:text-greenLight">
                <Link to="/faqs" onClick={() => setNavbar(!navbar)}>
                  Faqs
                </Link>
              </li>

              <li className="text-greenDark font-medium text-base capitalize font-sans hover:text-greenLight">
                <Link to="/contact" onClick={() => setNavbar(!navbar)}>
                  Contact us
                </Link>
              </li>
            </ul>

            <div className="mt-4 space-y-2 lg:hidden md:inline-block">
              <Link
                to="/login"
                className="inline-block w-max px-4 py-2 mr-4 text-center text-beigeLight text-sm bg-greenDark rounded-lg shadow font-semibold font-sans"
                onClick={() => setNavbar(!navbar)}
              >
                Schedule pickup
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-6 lg:inline-block">
          <Link
            to="/login"
            className="px-4 py-2 text-beigeLight text-sm bg-greenDark rounded-lg shadow  hover:text-greenLight font-semibold font-sans"
            onClick={() => setNavbar(!navbar)}
          >
            Schedule pickup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
