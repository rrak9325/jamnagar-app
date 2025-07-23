import React from "react";

const Staff = () => (
  <section>
    <h2>Staff Management</h2>
    <div className="card" style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600 }}>Ravi Patel</span>
        <div>
          <button className="btn" style={{ marginRight: 8 }}>Edit</button>
          <button className="btn" style={{ background: '#fffbe7', color: '#d32f2f' }}>Remove</button>
        </div>
      </div>
    </div>
    <div className="card" style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600 }}>Priya Shah</span>
        <div>
          <button className="btn" style={{ marginRight: 8 }}>Edit</button>
          <button className="btn" style={{ background: '#fffbe7', color: '#d32f2f' }}>Remove</button>
        </div>
      </div>
    </div>
    <button className="btn" style={{ width: '100%' }}>Add Staff</button>
  </section>
);

export default Staff; 