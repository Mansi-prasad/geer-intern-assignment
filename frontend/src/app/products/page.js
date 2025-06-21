"use client";
import { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [message, setMessage] = useState("");
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  useEffect(() => {
    console.log("url: ", url);
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        console.error("Products fetch error:", err);
        setMessage("Failed to load products.");
      }
    };
    fetchProducts();
  }, []);
  const handleSearch = async (query) => {
    try {
      const res = await fetch(url + `?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (data.length === 0) {
        setMessage("Products not found.");
      } else {
        setMessage("");
      }
      setFiltered(data);
    } catch (err) {
      console.error("Search error:", err);
      setMessage("Error fetching products.");
      setFiltered([]);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Product Listings</h1>
      <SearchBox onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="mt-10 text-gray-800 font-bold text-4xl">{message}</p>
        )}
      </div>
    </main>
  );
}
