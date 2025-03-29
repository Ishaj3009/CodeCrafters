import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed with Artisan ID: ${id}`);
    // Here, you can integrate API calls or local storage for saving booking details.
  };

  return (
    <div className="booking-form">
      <h2 className="form-title">Book a Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Additional Notes (Optional):</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Confirm Booking</button>
      </form>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default BookingForm;
