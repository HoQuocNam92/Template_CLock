import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import HomePage from "@pages/HomePage";
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
    </Routes>
  );
};

export default routes;
