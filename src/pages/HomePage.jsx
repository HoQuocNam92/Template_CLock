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
            <img src="/images/a-1.jpg" alt="" />
          </div>
          <div className="mt-[150px] mx-[10px]">
            <img src="/images/a-2.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-end items-start pl-[40px]">
          <h2 className="text-[32px] font-bold mb-[8px]">About Our Shop</h2>
          <p className="text-[16px] mt-[35px] mb-[16px]">
            There are many variations of passages of Lorem Ipsum There are many
            variations of passages of Lorem Ipsum
          </p>
          <button className="block mt-[35px] px-[35px] py-[8px] bg-[#8019c8] text-white rounded-sm hover:bg-[#541184] cursor-pointer">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-[#f1f1f1] mb-[45px]">
        <div className="w-[1170px] max-w-full m-auto  ">
          <div className="mb-[45px]">
            <h3 className="text-[24px] py-[10px] px-[20px] font-bold text-white bg-[#19c880] inline-block ">
              Top Sale Watches
            </h3>
          </div>
          <div className="grid grid-cols-3  ">
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w1.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w2.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w3.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] mb-[45px]">
        <div className="w-[1170px] max-w-full m-auto  ">
          <div className="mb-[45px]">
            <h3 className="text-[24px] py-[10px] px-[20px] font-bold text-white bg-[#19c880] inline-block ">
              Top Sale Watches
            </h3>
          </div>
          <div className="grid grid-cols-3  ">
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w3.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w4.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w5.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] mb-[45px]">
        <div className="w-[1170px] max-w-full m-auto  ">
          <div className="mb-[45px]">
            <h3 className="text-[24px] py-[10px] px-[20px] font-bold text-white bg-[#19c880] inline-block ">
              Top Sale Watches
            </h3>
          </div>
          <div className="grid grid-cols-3  ">
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w6.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w7.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="mx-[10px] mb-[45px]">
              <div className="bg-[#fff] p-[15px] ">
                <div className="flex justify-center my-[45px]">
                  <img
                    src="/images/w8.png"
                    className="h-[175px]"
                    alt="watches"
                  />
                </div>
                <div className="flex justify-between text-center font-bold">
                  <div>
                    <h6>Men's Watch</h6>
                    <h5>$ 300</h5>
                  </div>
                  <div>
                    <h6> Like</h6>
                    <div>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                      <i className="text-[yellow] fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[35px] text-center">
                <button className="px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
