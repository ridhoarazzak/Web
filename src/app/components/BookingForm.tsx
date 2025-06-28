"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman data ke backend
    console.log("Booking submitted:", formData);
    alert("Booking submitted successfully!");
  };

  return (
    <motion.form
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="checkIn">
          Check-In Date
        </label>
        <input
          type="date"
          id="checkIn"
          className="w-full p-3 border rounded"
          value={formData.checkIn}
          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="checkOut">
          Check-Out Date
        </label>
        <input
          type="date"
          id="checkOut"
          className="w-full p-3 border rounded"
          value={formData.checkOut}
          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="roomType">
          Room Type
        </label>
        <select
          id="roomType"
          className="w-full p-3 border rounded"
          value={formData.roomType}
          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
          required
        >
          <option value="">Select Room</option>
          <option value="deluxe">Deluxe Suite</option>
          <option value="executive">Executive Room</option>
          <option value="standard">Standard Room</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
      >
        Submit Booking
      </button>
    </motion.form>
  );
}
