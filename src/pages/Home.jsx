import React from "react";
import Header from "../components/layout/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="h-[835px] max-w-[100%]  "
          src="http://127.0.0.1:5500/images/slider-bg.jpg"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Home;
