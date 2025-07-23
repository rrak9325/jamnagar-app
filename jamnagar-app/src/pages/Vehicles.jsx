import React from "react";

const Vehicles = () => (
  <section>
    <h2>Vehicle Management</h2>
    <div className="card" style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600 }}>GJ-10-AB-1234</span>
        <div>
          <button className="btn" style={{ marginRight: 8 }}>Edit</button>
          <button className="btn" style={{ background: '#fffbe7', color: '#d32f2f' }}>Remove</button>
        </div>
      </div>
    </div>
    <div className="card" style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600 }}>GJ-10-CD-5678</span>
        <div>
          <button className="btn" style={{ marginRight: 8 }}>Edit</button>
          <button className="btn" style={{ background: '#fffbe7', color: '#d32f2f' }}>Remove</button>
        </div>
      </div>
    </div>
    <button className="btn" style={{ width: '100%' }}>Add Vehicle</button>
  </section>
);

export default Vehicles; 