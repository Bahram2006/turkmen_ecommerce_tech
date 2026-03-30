import { useRouter } from "next/router";
import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { addToCart } = useCart();
  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-4 cursor-pointer group"
    >
      {/* IMAGE */}
      <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* INFO */}
      <div className="mt-4 space-y-1">
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition">
          {product.name}
        </h2>

        <p className="text-lg font-bold text-black">{product.price} TMT</p>
      </div>

      {/* BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // detail page gitmez
          addToCart(product);
        }}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-red-500 transition"
      >
        Sebede goş
      </button>
    </div>
  );
};

export default ProductCard;
