import React, { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Giỏ hàng</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li
              key={index}
              className="border-b py-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-blue-500">{product.price} VND</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
