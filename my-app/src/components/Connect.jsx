import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Connect.css";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const form = useRef(null); // Using ref for form submission

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm("service_121314", "template_121314", form.current, "CMsWd3HzSJiKHXHQp")
      .then(() => {
        form.current.reset(); // Clear the form fields
        setMsg("Successfully Sent!");

        setTimeout(() => {
          setMsg("");
        }, 3000);
      })
      .catch((e) => console.log(e));
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        <span>Get in Touch</span>
      </h2>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h3><span>Let's Talk</span></h3>
          <p>
          We’re here to support artisans and learners in building a vibrant digital community. Whether you have questions about course enrollments, artisan services, or partnership opportunities, we’d love to hear from you! Reach out to us for any inquiries, feedback, or collaboration ideas, and let’s work together to empower skilled artisans and vocational experts. Connect with us today and be a part of the Artisan Connect movement!
          </p>
          <p>📧 artisanconnect@gmail.com</p>
          <p>📞 +91 1756392679</p>
          <p>📍 Mumbai, India</p>
        </div>

        {/* Right Side - Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="name" // ✅ Ensure name attribute matches EmailJS template key
            placeholder="Enter your name"
            className="input-field"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email" // ✅ Ensure name attribute matches EmailJS template key
            placeholder="Enter your email"
            className="input-field"
            required
          />

          <label>Write your message here</label>
          <textarea
            className="textarea-field"
            name="doubt" // ✅ Ensure name attribute matches EmailJS template key
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        <h2 className="msg">{msg}</h2>
      </div>
    </section>
  );
};

export default Contact;
