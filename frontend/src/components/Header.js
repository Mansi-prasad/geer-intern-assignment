"use client";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
export default function Header() {
  return (
    <header className="bg-white shadow-md py-2">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 flex gap-2">
          <TiShoppingCart />
          MyStore
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-500">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
