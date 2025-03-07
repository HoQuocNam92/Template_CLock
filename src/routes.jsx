import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import HomePage from "@pages/HomePage";
import ProductDetail from "@pages/ProductDetail";
const routes = () => {
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
        path="/details"
        element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default routes;
