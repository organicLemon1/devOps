import React from "react";

export default function Gallery() {
  const images = [
    "https://via.placeholder.com/150?text=Beach",
    "https://via.placeholder.com/150?text=Mountains",
    "https://via.placeholder.com/150?text=Forest"
  ];
  return (
    <div className="page">
      <h2>Travel Gallery</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="Travel" />
        ))}
      </div>
    </div>
  );
}
