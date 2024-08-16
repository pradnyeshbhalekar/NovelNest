import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./MobileFilter";
import logo from "../../assets/img/Website Log 3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import MobileFilter from "./MobileFilter";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [input, setInput] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-4 py-3 px-4 md:px-6 lg:px-8 bg-white ">
        {/* Logo */}
        <Link
          to="/"
          className="col-span-3 sm:col-span-2 flex items-center justify-center md:justify-start"
        >
          <img src={logo} alt="Logo" className="h-12 sm:h-16" />
        </Link>

        {/* Search Input */}
        <div className="col-span-6 sm:col-span-7 flex items-center">
          <input
            type="text"
            placeholder="Search.."
            className="bg-gray-200 h-10 w-full px-4 rounded-md font-medium outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="col-span-3 flex items-center justify-end sm:hidden">
          <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
          </button>
        </div>

        {/* Cart Icon (hidden on mobile) */}
        <div className="hidden relative sm:flex col-span-1 sm:col-span-1 items-center justify-end space-x-2">
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-black text-xl"
            />
            <span className="absolute top-2/4 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
              0
            </span>
            <span className="text-black font-light sm:ml-2  ">Cart</span>
          </Link>
        </div>

        {/* Bookmark Icon (hidden on mobile) */}
        <div className="hidden sm:flex col-span-1 sm:col-span-2 items-center  justify-end space-x-2">
          <Link to="/login">
            <span className="font-light sm:ml-2">Login</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-black"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                <span className="absolute top-6/4 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                  0
                </span>
                <span>Cart</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-black"
              >
                <span>Login</span>
              </Link>
            </li>
            <li>Category</li>
            <div className="flex">
              <MobileFilter />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
