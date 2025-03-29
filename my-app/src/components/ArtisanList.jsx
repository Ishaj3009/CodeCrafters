import "./styles.css";
// ArtisanList.jsx
import { Link } from "react-router-dom";

function ArtisanList() {
  const artisans = [
    { id: 1, name: "John Doe", skill: "Pottery" },
    { id: 2, name: "Jane Smith", skill: "Woodworking" },
  ];

  return (
    <div className="artisan-list">
      <h2 className="text-2xl font-bold mb-4">Available Artisans</h2>
      <ul>
        {artisans.map((artisan) => (
          <li key={artisan.id} className="mb-2">
            <Link to={`/artisan/${artisan.id}`} className="text-blue-500 hover:underline">
              {artisan.name} - {artisan.skill}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtisanList;
