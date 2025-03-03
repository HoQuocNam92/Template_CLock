import React from "react";
import Header from "../components/layout/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <img className=" w-full " src="/images/slider-bg.jpg" alt="Banner" />
        <div className="absolute  top-[50%] left-[20%] transform   -translate-y-1/2">
          <h1>STYLISH WATCHES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quidem maiores perspiciatis, illo maxime voluptatem a itaque
            suscipit.
          </p>
          <div>
            <button>Contact Us</button>
            <button>About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
