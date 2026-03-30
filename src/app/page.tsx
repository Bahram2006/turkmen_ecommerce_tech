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
            Iň täze monitorlar we PC enjamlary
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

      {/* 🎬 BIG SLIDER (FAKE FOR NOW) */}
      <div className="bg-white border rounded-2xl p-70 shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            RTX Gaming Setup
          </h2>
          <p className="text-gray-500 mb-4">
            High performance PC & accessories
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Gör
          </button>
        </div>

        <img
          src="/icons/gaming-monitor.png"
          className="w-32"
        />
      </div>

      {/* 🧩 4 SMALL CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Monitorlar", icon: "🖥️" },
          { title: "Laptoplar", icon: "💻" },
          { title: "GPU", icon: "🎮" },
          { title: "Aksesuarlar", icon: "⌨️" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white border rounded-xl p-4 text-center hover:shadow-md cursor-pointer transition"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}