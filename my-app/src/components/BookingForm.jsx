import "./styles.css";
// BookingForm.jsx
import { useParams } from "react-router-dom";

function BookingForm() {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <p className="mb-4">Booking for Artisan ID: {id}</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <input type="date" className="p-2 border rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
