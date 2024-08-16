import React from "react";
import logo from "../../assets/img/Website Log 3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-200 gap-5 p-2  sm:min-h-full min-h-full items-center sm:gap-10 md:gap-20 flex justify-center">
      <div>
        <Link to="/">
          <img
            src={logo}
            width={80}
            className="md:w-[200px] sm:mr-20 md:mr-40"
            alt=""
          />
        </Link>
      </div>
      <div className="text-xs md:text-base ">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/location">
          <p>Location</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
      <div className="text-xs md:text-base">
        <Link to="/help-center">
          <p>Help Center/FAQ</p>
        </Link>
        <Link to="/shipping-return">
          <p>Shipping & Return Policy</p>
        </Link>
        <Link to="/order-tracking">
          <p>Order Tracking</p>
        </Link>
        <Link to="/payment-options">
          <p>Payment Options</p>
        </Link>
      </div>
      <div className="text-xs md:text-base hidden lg:block">
        <Link to="/about">
          <p>About the Company</p>
        </Link>
        <Link to="/customer-service">
          <p>Customer Service</p>
        </Link>
        <Link to="/terms">
          <p>Terms & Conditions</p>
        </Link>
        <Link to="/privacy">
          <p>Privacy Policy</p>
        </Link>
      </div>
      <div className="text-xs md:text-base">
        <p>Follow us on:</p>
        <a href="https://www.instagram.com/pradnyesshh/">
          <p>Instagram</p>
        </a>

        <Link to="/youtube">
          <p>YouTube</p>
        </Link>
        <Link to="/x">
          <p>X</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
