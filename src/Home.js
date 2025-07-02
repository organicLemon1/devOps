import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to Travel Buddy</h1>
      <p>Your personal mini travel guide!</p>
      <ul>
        <li><Link to="/destinations">Explore Destinations</Link></li>
        <li><Link to="/plan-trip">Plan a Trip</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}
