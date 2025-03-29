import "./styles.css";
import './Navbar.css'
// Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold">Artisan Connect</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/artisans" className="mx-2">Artisans</Link>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
