import React from "react";

const Dashboard = () => (
  <section style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
    <div className="card" style={{ minWidth: 250, flex: 1 }}>
      <h3>Daily Revenue</h3>
      <p style={{ fontSize: "2rem", color: '#ffd700' }}>₹12,500</p>
    </div>
    <div className="card" style={{ minWidth: 250, flex: 1 }}>
      <h3>Monthly Profit/Loss</h3>
      <p style={{ fontSize: "2rem", color: '#ffd700' }}>+₹2,10,000</p>
    </div>
    <div className="card" style={{ minWidth: 250, flex: 1 }}>
      <h3>Booked Parcels</h3>
      <p style={{ fontSize: "2rem", color: '#ffd700' }}>38</p>
    </div>
  </section>
);

export default Dashboard; 