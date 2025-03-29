import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./ArtisanDashboard.css";

const ArtisanDashboard = () => {
  const [sessionViews, setSessionViews] = useState([
    { name: "Session 1", views: 120 },
    { name: "Session 2", views: 95 },
    { name: "Session 3", views: 150 },
    { name: "Session 4", views: 80 },
  ]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Artisan Dashboard</h2>

      {/* Popularity Chart */}
      <div className="chart-container">
        <h3>Session Popularity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sessionViews}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#ff8c00" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Add Demo Video */}
      <div className="demo-container">
        <h3>Upload Demo Video</h3>
        <input type="file" accept="video/*" className="file-input" />
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
};

export default ArtisanDashboard;
