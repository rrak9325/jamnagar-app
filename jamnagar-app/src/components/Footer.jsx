import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="vip-footer">
    <p>© {new Date().getFullYear()} Jamnagar Travels Pvt. Ltd. | Daily Parcel Service</p>
    <span className="vip-tagline">Exclusively connecting Jamnagar, every day.</span>
  </footer>
);

export default Footer; 