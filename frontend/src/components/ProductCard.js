import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-52 object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-blue-600 font-bold">₹{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
