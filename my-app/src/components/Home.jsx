import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Skilled Artisans</h1>
          <p>Connecting artisans with learners for a seamless skill-sharing experience.</p>
          <button className="explore-btn" onClick={() => navigate("/artisans")}>
            Explore Artisans
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Artisan Connect is a platform that connects skilled artisans with individuals eager to learn
          craftsmanship. We aim to preserve traditional skills while empowering artisans to share their talents.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🌟 Skilled Artisans</h3>
            <p>Learn from experienced professionals in various fields.</p>
          </div>
          <div className="feature-card">
            <h3>📅 Easy Booking</h3>
            <p>Seamless appointment scheduling with just a few clicks.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Global Access</h3>
            <p>Connect with artisans from different parts of the world.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Interactive Learning</h3>
            <p>Engage in live workshops and hands-on training sessions.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Email: support@artisanconnect.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Artisan Lane, Craft City</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
