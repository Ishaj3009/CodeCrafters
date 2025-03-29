import React from "react";
import "./Exhibition.css";

function Exhibition() {
  const exhibitions = [
    {
      id: 1,
      artist: "John Doe",
      title: "The Art of Pottery",
      date: "April 15, 2025",
      location: "Artisan Gallery, NY",
      description: "A deep dive into traditional and modern pottery techniques.",
      image: "https://media.istockphoto.com/id/1078456356/photo/indian-woman-painting-vases-in-her-workshop-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pbc3Y__1KbvsigQY2f2UdfC2X5AQ0KQJp6v2zx-e84M="
    },
    {
      id: 2,
      artist: "Jane Smith",
      title: "Crafting Wood into Art",
      date: "May 10, 2025",
      location: "Woodworks Studio, LA",
      description: "Handmade furniture and decorative pieces showcase.",
      image: "https://media.istockphoto.com/id/885281304/photo/carpenter-taking-perfect-measurement.webp?a=1&b=1&s=612x612&w=0&k=20&c=5mPUwNkPQEFHyo-qrI2TICJk8RNl7fVGbMLJPlhk270="
    },
    {
      id: 3,
      artist: "Carlos Mendoza",
      title: "Colors of Life",
      date: "June 5, 2025",
      location: "Modern Art Museum, Paris",
      description: "A journey through vibrant oil and watercolor paintings.",
      image: "https://media.istockphoto.com/id/1053257968/photo/portrait-of-a-man-painting.webp?a=1&b=1&s=612x612&w=0&k=20&c=oNHreO8TlsMiKhQQitSTl2i6oMATogfEaHI-RLOFOig="
    },
    {
      id: 4,
      artist: "Emily Clarke",
      title: "The Beauty of Sculpture",
      date: "July 20, 2025",
      location: "Sculpture Center, London",
      description: "Showcasing intricate marble and clay sculptures.",
      image: "https://media.istockphoto.com/id/1076791836/photo/sculptor-working-with-sculpture-in-the-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=48j2oOKvTnhi0VunmZvWrVZIT4XY5DIpSuyjPbp1Gmg="
    },
    {
      id: 5,
      artist: "Ahmed Khan",
      title: "Masterpieces in Metal",
      date: "August 12, 2025",
      location: "Metalwork Gallery, Dubai",
      description: "Intricate metalwork and jewelry designs on display.",
      image: "https://media.istockphoto.com/id/977573346/photo/goldsmith-wrap-silver-wire-with-pliers-in-a-spiral-for-small-chain-rings-macro-shot-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=z6YcZnvTjBPGKc67eERiK6fuBAq6eeCLKHih5G1N-PM="
    },
    {
      id: 6,
      artist: "Sophie Laurent",
      title: "Threads of Tradition",
      date: "September 25, 2025",
      location: "Textile Museum, Milan",
      description: "A showcase of exquisite handwoven fabrics and textiles.",
      image: "https://media.istockphoto.com/id/508651253/photo/indian-women-weaving-textile.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlZ3e1pMhVtpjEB8YOJ1K6KKZFNsSjHSvkkp7X3H-U8="
    }
  ];

  return (
    <div className="exhibition-list">
      <h2 className="title">Upcoming Exhibitions</h2>
      <div className="exhibition-container">
        {exhibitions.map((exhibition) => (
          <div key={exhibition.id} className="exhibition-card">
            <img src={exhibition.image} alt={exhibition.title} className="exhibition-image" />
            <h3 className="exhibition-title">{exhibition.title}</h3>
            <p className="exhibition-artist">By {exhibition.artist}</p>
            <p className="exhibition-date">{exhibition.date}</p>
            <p className="exhibition-location">{exhibition.location}</p>
            <p className="exhibition-description">{exhibition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exhibition;