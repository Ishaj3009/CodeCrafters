import { Link } from "react-router-dom";
import "./ArtisanList.css";

function ArtisanList() {
  const artisans = [
    {
      id: 1,
      name: "John Doe",
      skill: "Pottery",
      description: "Expert in traditional and modern pottery techniques.",
      image: "https://media.istockphoto.com/id/1078456356/photo/indian-woman-painting-vases-in-her-workshop-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pbc3Y__1KbvsigQY2f2UdfC2X5AQ0KQJp6v2zx-e84M=",
    },
    {
      id: 2,
      name: "Jane Smith",
      skill: "Woodworking",
      description: "Experienced woodworker specializing in handmade furniture.",
      image: "https://media.istockphoto.com/id/885281304/photo/carpenter-taking-perfect-measurement.webp?a=1&b=1&s=612x612&w=0&k=20&c=5mPUwNkPQEFHyo-qrI2TICJk8RNl7fVGbMLJPlhk270=",
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      skill: "Painting",
      description: "Specialist in oil and watercolor paintings.",
      image: "https://media.istockphoto.com/id/1053257968/photo/portrait-of-a-man-painting.webp?a=1&b=1&s=612x612&w=0&k=20&c=oNHreO8TlsMiKhQQitSTl2i6oMATogfEaHI-RLOFOig=",
    },
    {
      id: 4,
      name: "Emily Clarke",
      skill: "Sculpting",
      description: "Creates stunning sculptures with marble and clay.",
      image: "https://media.istockphoto.com/id/1076791836/photo/sculptor-working-with-sculpture-in-the-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=48j2oOKvTnhi0VunmZvWrVZIT4XY5DIpSuyjPbp1Gmg=",
    },
    {
      id: 5,
      name: "Ahmed Khan",
      skill: "Metal Crafting",
      description: "Masters intricate metalwork and jewelry design.",
      image: "https://media.istockphoto.com/id/977573346/photo/goldsmith-wrap-silver-wire-with-pliers-in-a-spiral-for-small-chain-rings-macro-shot-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=z6YcZnvTjBPGKc67eERiK6fuBAq6eeCLKHih5G1N-PM=",
    },
    {
      id: 6,
      name: "Sophie Laurent",
      skill: "Textile Weaving",
      description: "Creates beautiful handwoven fabrics and textiles.",
      image: "https://media.istockphoto.com/id/508651253/photo/indian-women-weaving-textile.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlZ3e1pMhVtpjEB8YOJ1K6KKZFNsSjHSvkkp7X3H-U8=",
    },
  ];

  return (
    <div className="artisan-list">
      <h2 className="title">Available Artisans</h2>
      <div className="artisan-container">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="artisan-card">
            <img src={artisan.image} alt={artisan.name} className="artisan-image" />
            <h3 className="artisan-name">{artisan.name}</h3>
            <p className="artisan-skill">{artisan.skill}</p>
            <p className="artisan-description">{artisan.description}</p>
            <Link to={`/artisan/${artisan.id}`} className="view-profile-btn">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;
