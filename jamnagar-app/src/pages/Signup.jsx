import React from "react";
import { Link } from "react-router-dom";

const Signup = () => (
  <section style={{ maxWidth: 400, margin: "0 auto" }}>
    <h2>Signup</h2>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="btn" style={{ width: "100%", marginTop: 16 }}>Sign Up</button>
    </form>
    <p style={{ marginTop: 16, color: '#fffbe7' }}>
      Already have an account? <Link to="/login" style={{ color: '#ffd700' }}>Login</Link>
    </p>
  </section>
);

export default Signup; 