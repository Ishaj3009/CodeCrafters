import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArtisanList from "./components/ArtisanList";
import ArtisanProfile from "./components/ArtisanProfile";
import BookingForm from "./components/BookingForm";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./components/styles.css"; // Ensure styles are properly imported

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisans" element={<ArtisanList />} />
            <Route path="/artisan/:id" element={<ArtisanProfile />} />
            <Route path="/book/:id" element={<BookingForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
