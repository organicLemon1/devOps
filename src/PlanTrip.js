import React, { useState } from "react";

export default function PlanTrip() {
  const [form, setForm] = useState({ name: "", destination: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip planned for ${form.name} to ${form.destination} on ${form.date}`);
    // Future: send this data to backend using fetch/axios
    setForm({ name: "", destination: "", date: "" });
  };

  return (
    <div className="page">
      <h2>Plan Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} placeholder="Your Name" onChange={handleChange} /><br />
        <input name="destination" value={form.destination} placeholder="Destination" onChange={handleChange} /><br />
        <input name="date" type="date" value={form.date} onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
