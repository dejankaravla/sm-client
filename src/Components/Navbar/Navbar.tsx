import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className={`navbar_container ${!mobileMenu ? "navbar_container_mobile" : ""}`}>
        <NavLink onClick={() => setMobileMenu(true)} className="navbar_logo" to="/">
          Sale Mobi
        </NavLink>

        <AiOutlineMenu
          className={`mobileMenu ${mobileMenu ? "menuEnable" : ""}`}
          onClick={() => setMobileMenu(false)}
        />

        <ul className={`navbar_list ${mobileMenu ? "navbar_list_mobileDisable" : "navbar_list_mobile"}`}>
          <NavLink
            onClick={() => setMobileMenu(true)}
            className={({ isActive }) => (isActive ? "navbar_Link_Active" : "")}
            to="/products"
          >
            Products
          </NavLink>

          <NavLink
            onClick={() => setMobileMenu(true)}
            className={({ isActive }) => (isActive ? "navbar_Link_Active" : "")}
            to="/orders"
          >
            Orders
          </NavLink>
          <NavLink
            onClick={() => setMobileMenu(true)}
            className={({ isActive }) => (isActive ? "navbar_Link_Active" : "")}
            to="/account"
          >
            My Account
          </NavLink>
          <NavLink
            onClick={() => setMobileMenu(true)}
            className={({ isActive }) => (isActive ? "navbar_Link_Active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <FaShoppingCart size={20} style={{ color: "white" }} />
          <li
            onClick={() => {
              localStorage.removeItem("accessToken");
              //   dispatch(handleLogout());
              //   setAuth(false);
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
