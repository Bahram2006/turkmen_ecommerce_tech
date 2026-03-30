"use client";

import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Sebet</h1>

      {cart.length === 0 ? (
        <p>Sebet boş</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.image} className="w-12 h-12" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.price} TMT
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Aýyr
              </button>
            </div>
          ))}

          <div className="mt-4 text-right font-bold">
            Jemi: {totalPrice} TMT
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;