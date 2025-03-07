import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Sử dụng để chuyển trang
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500 text-lg">
        Sản phẩm không tồn tại!
      </div>
    );
  }

  // Hàm thêm vào giỏ hàng và chuyển hướng
  const handleAddToCart = () => {
    // Lưu sản phẩm vào localStorage (hoặc context)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Chuyển hướng sang trang giỏ hàng
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cột ảnh sản phẩm */}
        <div className="md:col-span-2 ">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-lg text-center"
            />
          </div>
        </div>

        {/* Cột thông tin sản phẩm */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 my-4">
            {product.price} VND
          </p>

          {/* Khu vực khuyến mãi */}
          <div className="bg-yellow-100 p-4 rounded-lg mb-4">
            <p className="text-orange-600 font-medium">
              🎉 Giảm 10% (Tối đa 300.000đ) khi thanh toán qua VNPay
            </p>
            <p className="text-gray-600 text-sm">
              Mua online giảm ngay, áp dụng đến hết tháng này.
            </p>
          </div>

          {/* Nút CTA */}
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-orange-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-orange-600 transition">
              Mua ngay
            </button>
            <button
              onClick={handleAddToCart} // Gọi hàm khi nhấn nút
              className="flex-1 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>

      {/* Thông số kỹ thuật */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">Thông số kỹ thuật</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Màn hình:</strong> {product.screen || "OLED"}
          </li>
          <li>
            <strong>Chip:</strong> {product.chip || "Apple S10"}
          </li>
          <li>
            <strong>Dung lượng pin:</strong> {product.battery || "18 giờ"}
          </li>
          <li>
            <strong>Trọng lượng:</strong> {product.weight || "42g"}
          </li>
        </ul>
      </div>
    </div>
  );
}
