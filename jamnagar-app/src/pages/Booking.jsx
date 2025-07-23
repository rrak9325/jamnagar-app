import React from "react";

const Booking = () => (
  <section>
    <h2>Parcel Booking</h2>
    <form style={{ maxWidth: 500, margin: "0 auto" }}>
      <input type="text" placeholder="Parcel ID" required />
      <input type="text" placeholder="Customer Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="text" placeholder="From (Origin)" required />
      <input type="text" placeholder="To (Destination)" required />
      <input type="number" placeholder="Weight (kg)" required min="0" step="0.01" />
      <input type="file" accept="image/*" style={{ background: '#fffbe7', border: 'none', color: '#0a183d' }} />
      <button type="submit" className="btn" style={{ width: "100%", marginTop: 16 }}>Save & Book</button>
    </form>
  </section>
);

export default Booking; 