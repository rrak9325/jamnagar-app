import React from "react";

const Home = () => (
  <section style={{ textAlign: "center", padding: "2rem 0" }}>
    <h1>Welcome to <span style={{ color: '#ffd700' }}>Jamnagar Travels Pvt. Ltd.</span></h1>
    <p style={{ fontSize: "1.2rem", margin: "1.5em 0", color: "#fffbe7" }}>
      Experience premium daily parcel service, vehicle tracking, and exclusive management tools.<br />
      Trusted by Jamnagar for reliability and speed.
    </p>
    <a href="/booking" className="btn" style={{ fontSize: "1.1rem" }}>Book a Parcel Now</a>
  </section>
);

export default Home; 