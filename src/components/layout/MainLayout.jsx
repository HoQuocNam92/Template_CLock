import React from "react";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
