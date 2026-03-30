import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* 🔥 BANNER */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Gaming & Technology Store
          </h1>
          <p className="text-gray-300 mb-4">
            Iň täze monitorlar, PC komponentler we gaming enjamlary
          </p>
          <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Häzir satyn al
          </button>
        </div>

        <img
          src="/icons/gaming-monitor.png"
          className="w-40 hidden md:block"
        />
      </div>

      {/* 🧭 CATEGORIES */}
      <div>
        <h2 className="text-xl font-bold mb-4">Kategoriýalar</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Monitor", "Laptop", "GPU", "Accessories"].map((cat) => (
            <div
              key={cat}
              className="bg-white border rounded-xl p-4 text-center hover:shadow-md cursor-pointer transition"
            >
              <div className="text-2xl mb-2">🖥️</div>
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🛍️ PRODUCTS */}
      <div>
        <h2 className="text-xl font-bold mb-4">Soňky harytlar</h2>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}