async function getProduct(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const res = await fetch(url + `/api/products/${id}`);
  if (!res.ok) {
    const errorMsg = await res.json();
    throw new Error(errorMsg.error || "Product not found");
  }
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 bg-gray-100 my-10">
      <div className="md:flex gap-6 md:px-12">
        <div className="px-10">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-72 object-contain rounded"
          />
        </div>
        <div className="mt-10 px-10">
          <h1>{product.category}</h1>
          <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
          <p className="text-xl text-blue-600 font-semibold mt-2">
            ₹{product.price}
          </p>
          <p className="mt-4 text-gray-700">
            {product.description || "No description available."}
          </p>
          {product.category && (
            <p className="mt-2 text-sm text-gray-500">
              Category: {product.category}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
