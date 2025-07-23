import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/booking", label: "Booking" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/staff", label: "Staff" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="vip-header">
      <div className="vip-logo">Jamnagar <span>Travels</span></div>
      <nav className="vip-nav">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/login" className="vip-account">
          <span role="img" aria-label="account">👤</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header; 