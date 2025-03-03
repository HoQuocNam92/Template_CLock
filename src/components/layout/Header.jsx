import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-[16px] py-[15px]">
      <h1 className="text-2xl font-bold ">HANDTIME</h1>
      <div className="font-[Roboto]">
        <a
          className="inline-block px-[25px] py-[5px]  bg-[#8019c8] text-white rounded-sm "
          href="/"
        >
          HOME
        </a>
        <a className="inline-block px-[25px] py-[5px]" href="/about">
          ABOUT
        </a>
        <a className="inline-block px-[25px] py-[5px]" href="/products">
          PRODUCTS
        </a>
        <a className="inline-block px-[25px] py-[5px]" href="/testimonial">
          TESTIMONIAL
        </a>
        <a className="inline-block px-[25px] py-[5px]" href="/contact">
          CONTACT US
        </a>
      </div>
      <div className="leading-[32px]">
        <i className="text-[#8019c8] px-[8px] fa-solid fa-user"></i>
        <i className=" text-[#8019c8] fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Header;
