import React from "react";
const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <img className=" w-full " src="/images/slider-bg.jpg" alt="Banner" />
        <div className="absolute top-[40%] left-[5%] transform  -translate-y-1/2 w-[650px]">
          <h1 className="text-[40px] text-white font-bold">STYLISH WATCHES</h1>
          <p className="text-[16px] my-[25px] text-white ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quidem maiores perspiciatis, illo maxime voluptatem a itaque
            suscipit.
          </p>
          <div className="m-[-5px]">
            <button className="m-[5px] cursor-pointer hover:bg-[#118454] py-[10px] px-[48px] bg-[#19c880] text-white">
              Contact Us
            </button>
            <button className="m-[5px] cursor-pointer hover:bg-[#541184] py-[10px] px-[48px] bg-[#8019c8] text-white">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center bg-[#f1f1f1]">
        <div className="px-[15px] my-[45px]">
          <img
            src="/images/feature-1.png"
            className="inline-block  w-[62px] grayscale-[100%]  text-red-50"
            alt=""
          />
          <h2 className="text-[20px] my-[8px] font-bold  ">NEW ARRIVALS</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="px-[15px] my-[45px]">
          <img
            src="/images/feature-2.png"
            className="inline-block  w-[62px] grayscale-[100%] text-color-black"
            alt=""
          />
          <h2 className="text-[20px] my-[8px] font-bold ">NEW ARRIVALS</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="px-[15px] my-[45px]">
          <img
            src="/images/feature-3.png"
            className="inline-block  w-[62px] grayscale-[100%] text-color-black"
            alt=""
          />
          <h2 className="text-[20px] my-[8px] font-bold ">NEW ARRIVALS</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="px-[15px] my-[45px]">
          <img
            src="/images/feature-4.png"
            className="inline-block  w-[62px] grayscale-[100%] text-color-black"
            alt=""
          />
          <h2 className="text-[20px] my-[8px] font-bold ">NEW ARRIVALS</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
      <div className="grid grid-cols-2 py-[90px]">
        <div className="grid grid-cols-2 px-[15px]">
          <div className="mx-[10px]">
            <img src="/images/a-1.jpg" className=" w-full" alt="" />
          </div>
          <div className="mt-[150px] mx-[10px]">
            <img src="/images/a-2.jpg" className="w-full" alt="" />
          </div>
        </div>
        <div>
          <h2>About Our Shop</h2>
          <p>
            There are many variations of passages of Lorem Ipsum There are many
            variations of passages of Lorem Ipsum
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
