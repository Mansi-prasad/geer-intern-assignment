"use client";
import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <input
      type="text"
      placeholder="Search products by name or category..."
      value={query}
      onChange={handleChange}
      className="w-full px-4 py-2 mb-6 border rounded-lg"
    />
  );
}
