import "./styles.css";
// ArtisanProfile.jsx
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ArtisanProfile() {
  const { id } = useParams();
  const artisan = { id, name: "John Doe", skill: "Pottery", description: "Expert in traditional and modern pottery techniques." };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{artisan.name}</h2>
      <p className="text-lg">Skill: {artisan.skill}</p>
      <p className="mt-2">{artisan.description}</p>
      <Link to={`/booking/${artisan.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">Book a Session</Link>
    </div>
  );
}

export default ArtisanProfile;
