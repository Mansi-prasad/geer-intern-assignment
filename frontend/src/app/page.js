import Image from "next/image";
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 mt-26">
      <div className="md:flex justify-between gap-20">
        <div className="text-center md:text-left pb-10">
          <h1 className="text-6xl my-6 text-blue-600">My Store</h1>
          <div>
            <p className="font-semibold text-gray-700 pb-4">
              Discover the latest Electronics, Accessories, Skincare, Wearables,
              Footwear, Jewelry products
            </p>
          </div>
          <div>
            <button className="py-2 px-6 text-blue-700 border rounded-xl border-blue-700 hover:cursor-pointer hover:text-white hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/eStore.png"
            alt="image"
            width={300}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
