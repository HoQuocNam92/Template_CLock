import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import HomePage from "@pages/HomePage";
import ProductDetail from "@pages/ProductDetail";
import CartPage from "@pages/CartPage"; // Thêm trang giỏ hàng

const RoutesConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/details/:id"
        element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <CartPage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;
