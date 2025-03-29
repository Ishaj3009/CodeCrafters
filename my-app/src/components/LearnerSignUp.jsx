import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Common CSS for styling

const LearnerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    interests: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Learner Signed Up:", formData);
    navigate("/LearnerDashboard"); // Redirect to Learner Dashboard
  };

  return (
    <div className="signup-container">
      <h2>Learner Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="interests" placeholder="Your Interests (e.g., painting, sculpture)" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default LearnerSignup;
