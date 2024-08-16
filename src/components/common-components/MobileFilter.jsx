import React from "react";
import { NavLink } from "react-router-dom";

const MobileFilter = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "underline" : "no-underline ";
  return (
    <div className=" text-center sm:hidden  ">
      <div className="grid grid-cols-3 sm:grid-cols-6 md:col ">
        <NavLink to="/" className={linkClass}>
          <span>Home</span>
        </NavLink>
        <NavLink to="/dark-comedy" className={linkClass}>
          <span>Dark-Comedy</span>
        </NavLink>
        <NavLink to="/comic" className={linkClass}>
          <span>Comic</span>
        </NavLink>
        <NavLink to="/fantasy" className={linkClass}>
          <span>Fantasy</span>
        </NavLink>
        <NavLink to="/drama" className={linkClass}>
          <span>Drama</span>
        </NavLink>
        <NavLink to="/sci-fi" className={linkClass}>
          <span>Sci-Fi</span>
        </NavLink>
        <NavLink to="/romance" className={linkClass}>
          <span>Romance</span>
        </NavLink>
        <NavLink to="/thriller" className={linkClass}>
          <span>Thriller</span>
        </NavLink>
        <NavLink to="/horror" className={linkClass}>
          <span>Horror</span>
        </NavLink>
        <NavLink to="/non-fiction" className={linkClass}>
          <span className="">Non-Fiction</span>
        </NavLink>
        <NavLink to="/humor" className={linkClass}>
          <span className="">Humor</span>
        </NavLink>
        <NavLink to="/classics" className={linkClass}>
          <span className="">Classics</span>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileFilter;
