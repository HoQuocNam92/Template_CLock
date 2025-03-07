import { useCart } from "@context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold">🛒 Giỏ hàng</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-2">Giỏ hàng trống</p>
      ) : (
        <ul className="space-y-4 mt-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white p-3 rounded-md"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-700">
                  {item.price} VND x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                ❌ Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
