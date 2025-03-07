import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@context/CartContext"; // Import CartProvider

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      {" "}
      {/* Bọc ứng dụng trong CartProvider */}
      <App />
    </CartProvider>
  </BrowserRouter>,
);
