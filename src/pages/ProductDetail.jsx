import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log("check", product);
  useEffect(() => {
    // Đọc dữ liệu từ JSON
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">
        Sản phẩm không tồn tại!
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />
        <div>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            {product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <button className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
