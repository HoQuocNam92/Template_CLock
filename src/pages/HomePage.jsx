import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const navigate = useNavigate();

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
            <button
              onClick={() => navigate("/details")}
              className=" m-[5px] cursor-pointer hover:bg-[#118454] py-[10px] px-[48px] bg-[#19c880] text-white"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/details")}
              className=" m-[5px] cursor-pointer hover:bg-[#541184] py-[10px] px-[48px] bg-[#8019c8] text-white"
            >
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
          <button
            onClick={() => navigate("/details")}
            className=" block mt-[35px] px-[35px] py-[8px] bg-[#8019c8] text-white rounded-sm hover:bg-[#541184] cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>
      {/* <div className="bg-[#f1f1f1] mb-[45px]">
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
                  {product.map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      className="h-[175px]"
                      alt="watches"
                    />
                  ))}
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
                <button
                  onClick={() => navigate("/details")}
                  className=" px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[35px] text-center">
            <button
              onClick={() => navigate("/details")}
              className=" px-[30px] text-white rounded-xs cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-3 gap-6 w-[1170px] max-w-full m-auto  ">
        {product.map((item) => (
          <div
            key={item.id}
            id={`product-${item.id}`} // Gắn id cho từng sản phẩm
            className="mx-[10px] mb-[45px] bg-[#fff] p-[15px] shadow-md rounded-lg"
          >
            <div className="flex justify-center my-[45px]">
              <img src={item.image} className="h-[175px]" alt={item.name} />
            </div>
            <div className="flex justify-between text-center font-bold">
              <div>
                <h6>{item.name}</h6>
                <h5>${item.price}</h5>
              </div>
              <div>
                <h6>Like</h6>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="text-[yellow] fa-solid fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-[35px] text-center">
              <button
                onClick={() => navigate(`/details/${item.id}`)} // Điều hướng với id
                className="px-[30px] text-white rounded-lg cursor-pointer py-[10px] bg-[#8019c8] hover:bg-[#541184]"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="py-[90px]">
        <div className="w-[1170px] m-auto">
          <div>
            <h2 className="mb-[25px] text-[32px] font-bold">CONTACT US</h2>
          </div>
          <div className="mx-[-14px] grid grid-cols-2">
            <div className="px-[15px]">
              <div>
                <input
                  className="w-full bg-[#fff] shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] mb-[25px] pl-[15px] py-[10px]"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="w-full bg-[#fff] shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] mb-[25px] pl-[15px] py-[10px]"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  className="w-full bg-[#fff] shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] mb-[25px] pl-[15px] py-[10px]"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="w-full bg-[#fff] shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] mb-[25px] pl-[15px] py-[10px]"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button
                onClick={() => navigate("/details")}
                className=" bg-[rgb(128,25,200)] rounded-sm hover:bg-[rgb(84,17,132)] cursor-pointer px-[50px] py-[10px] text-white"
              >
                SEND
              </button>
            </div>
            <div className="px-[15px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.044209031262!2d106.65658297570354!3d10.807926058610532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293bf882785b%3A0x5a3e84b695f6015d!2zTmjDoCBnYSBow6BuZyBow7NhIHF14buRYyB04bq_IFPDom4gYmF5IFTDom4gU8ahbiBOaOG6pXQsIE5ndXnhu4VuIFbEg24gVsSpbmgsIFBoxrDhu51uZyA0LCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1741341797163!5m2!1svi!2s"
                width="555"
                height="450"
                style={{ border: 0 }}
                allowFullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[1170px] m-auto">
          <div className="text-center text-[32px] font-bold  ">
            <h2>Testimonial</h2>
          </div>

          <div className="flex items-center my-12 relative justify-center">
            <div className="relative z-10 -ml-10">
              <img
                className="rounded-full w-24 h-24 border-4 border-green-500 bg-white shadow-lg"
                src="/images/client.jpg"
                alt="User"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md ml-[-30px] relative z-0 max-w-4xl ">
              <h5 className="text-purple-700 font-bold text-lg">Morojink</h5>
              <h6 className="text-green-500 font-semibold">Customer</h6>
              <p className="text-gray-700 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
