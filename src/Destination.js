import React from "react";

export default function Destinations() {
  const places = ["Manali", "Goa", "Jaipur", "Leh-Ladakh", "Rishikesh"];
  return (
    <div className="page">
      <h2>Top Travel Destinations</h2>
      <ul>
        {places.map((place, i) => <li key={i}>{place}</li>)}
      </ul>
    </div>
  );
}
