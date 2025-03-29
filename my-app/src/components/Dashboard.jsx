// import "./styles.css";

// // Dashboard.jsx
// function Dashboard() {
//     return (
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//         <p>Manage your sessions, bookings, and learner interactions here.</p>
//       </div>
//     );
//   }
  
//   export default Dashboard;
  

import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Artisan Connect Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/" className="dashboard-card artisans">
          <h2>Artisans</h2>
          <p>Manage your products and orders.</p>
        </Link>
        <Link to="/artisans" className="dashboard-card learners">
          <h2>Learners</h2>
          <p>Find and enroll in skill-based courses.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
