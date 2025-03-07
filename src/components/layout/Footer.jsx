import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
const images = [
  "/images/w1.png",
  "/images/w2.png",
  "/images/w3.png",
  "/images/w4.png",
  "/images/w5.png",
  "/images/w6.png",
];

export default function Footer() {
  return (
    <footer className="bg-[#0e1118] text-white py-12">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-4">HANDTIME</h2>
        <hr className="border-gray-700 w-1/3 mx-auto mb-6" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {/* About Shop */}
          <div>
            <h3 className="font-semibold mb-3">About Shop</h3>
            <p className="flex items-center gap-2">
              <MdLocationOn size={16} /> Address
            </p>
            <p className="flex items-center gap-2">
              <MdPhone size={16} /> +01 1234567890
            </p>
            <p className="flex items-center gap-2">
              <MdEmail size={16} /> demo@gmail.com
            </p>
          </div>

          {/* Informations */}
          <div>
            <h3 className="font-semibold mb-3">Informations</h3>
            <p className="text-gray-400">
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="font-semibold mb-3">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Watch ${index + 1}`}
                  className="w-14 h-14 object-cover"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-3">Newsletter</h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none bg-[#fff]"
              />
              <button className="bg-purple-600 px-4 py-2 text-white rounded-r-md hover:bg-purple-700 cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mt-6 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          © 2025 All Rights Reserved By Free HTML Templates
        </p>
      </div>
    </footer>
  );
}
