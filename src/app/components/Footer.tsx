import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiClockClockwiseBold } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const footer1 = "/food1.png";
const footer2 = "/food2.png";
const footer3 = "/food3.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Subscription Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-4 md:px-[135px] py-8 max-w-screen overflow-hidden">
        <div className="text-white text-center md:text-left md:w-[50%] w-full mb-4 md:mb-0">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-[12px] md:text-[16px] font-normal mt-3">
            Don&apos;t wait, make a smart &amp; logical quote here. It&apos;s
            pretty easy.
          </p>
        </div>

        {/* Input and Button */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2 md:gap-0">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-[#FF9F0D] text-white placeholder-white text-center py-3 px-4 md:px-6 w-full md:w-auto rounded-md md:rounded-l-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subscribe Now"
            className="bg-white text-orange-700 placeholder-orange-500 text-center py-3 px-4 md:px-6 w-full md:w-auto rounded-md md:rounded-l-md focus:outline-none"
          />
        </div>
      </div>
      <hr className="my-4 border-[#FF9F0D]" />

      {/* Center Section */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div className="text-center">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">
              About Us
            </h2>
            <p className="text-gray-400 text-[16px]">
              Corporate clients and leisure travelers rely on Groundlink for
              dependable, safe, and professional chauffeured car service in
              major cities across the world.
            </p>
            <div className="flex justify-center items-center mt-4">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                <div className="text-white text-[40px]">
                  <PiClockClockwiseBold />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-white text-[16px] font-normal">
                  Opening Hours
                </h3>
                <p className="text-white text-[12px]">
                  Mon - Sat (8:00 - 18:00)
                </p>
                <p className="text-white text-[12px]">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-center">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">
              Useful Links
            </h2>
            <ul className="text-gray-400">
              <li className="mb-2 hover:underline">
                <Link href="#">About</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">News</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Partners</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Team</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Menu</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="text-center">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Help?</h2>
            <ul className="text-gray-400">
              <li className="mb-2 hover:underline">
                <Link href="#">FAQ</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Reporting</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Documentation</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link href="#">Support Policy</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="text-center">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">
              Recent Posts
            </h2>
            {[footer1, footer2, footer3].map((img, index) => (
              <div key={index} className="flex gap-4 mb-4 items-center">
                <Image
                  src={img}
                  alt={`Food ${index + 1}`}
                  width={64}
                  height={64}
                />
                <div>
                  <p className="text-white text-[12px]">February 20, 2022</p>
                  <h3 className="text-white text-[14px] font-normal hover:underline">
                    Is fastfood good for your body?
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full px-4 py-3 bg-[#333333] flex flex-col md:flex-row items-center justify-between">
        <span className="text-white text-sm mb-2 md:mb-0">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </span>
        <div className="flex gap-4">
          <div className="bg-[#444444] text-white w-9 h-9 p-2 rounded flex items-center justify-center">
            <FaFacebookF />
          </div>
          <div className="bg-[#444444] text-white w-9 h-9 p-2 rounded flex items-center justify-center">
            <FaTwitter />
          </div>
          <div className="bg-[#444444] text-white w-9 h-9 p-2 rounded flex items-center justify-center">
            <FaInstagram />
          </div>
          <div className="bg-[#444444] text-white w-9 h-9 p-2 rounded flex items-center justify-center">
            <FaYoutube />
          </div>
          <div className="bg-[#444444] text-white w-9 h-9 p-2 rounded flex items-center justify-center">
            <FaPinterest />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
