import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image"; // Assuming you are using Next.js
import Hero from "./Hero";
import Head from "next/head";

// Team members data
const teamMembers = [
  {
    name: "Mark Henry",
    role: "Owner",
    img: "/pix.png", // Replace with your actual image path
    social: [], // No social icons for this member
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    img: "/pix.png", // Replace with your actual image path
    social: [
      { icon: <FaFacebookF />, link: "https://facebook.com" },
      { icon: <FaTwitter />, link: "https://twitter.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
  {
    name: "Moon Henry",
    role: "Founder",
    img: "/pix.png", // Replace with your actual image path
    social: [], // No social icons for this member
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    img: "/pix.png", // Replace with your actual image path
    social: [], // No social icons for this member
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-wrap justify-between items-center px-6 md:px-16 py-10 max-w-full">
        {/* Left Side (Images Section) */}
        <div className="w-full md:w-1/2 flex gap-4">
          <div className="grid grid-cols-2 gap-4 w-full max-w-full">
            <Image
              src="/lemon.png" // Replace with your actual image
              alt="Lemon"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto md:h-[400px] transition-transform transform hover:scale-105"
            />
            <div className="flex flex-col gap-4">
              <Image
                src="/Yougurt.jpeg" // Replace with your actual image
                alt="Yogurt"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-auto md:h-[200px] mt-10 transition-transform transform hover:scale-105"
              />
              <Image
                src="/Pasta.jpeg" // Replace with your actual image
                alt="Pasta"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-auto md:h-[300px] transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Text Section) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-10">
          <h1 className="text-sm font-medium text-yellow-400 italic">
            About us _
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Food is an important part <br /> Of a balanced Diet
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-2 bg-orange-400 text-white rounded transition-transform transform hover:scale-105">
              Show More
            </button>
            <button className="flex items-center px-4 py-2 text-black border-2 border-orange transition-transform transform hover:scale-105">
              <div className="flex justify-center items-center w-8 h-8 bg-orange-500 text-white rounded-full mr-3">
                <IoPlayOutline size={16} />
              </div>
              <span className="text-gray-700 font-medium">Watch video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-8 mx-auto max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="/foodback.png"
              alt="Dish 1"
              className="rounded-lg object-cover px-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl w-3/4"
              width={800} // Set an appropriate width
              height={600} // Set an appropriate height
              priority // Optional: Use for above-the-fold images to improve LCP
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 max-w-full">
          {/* Best Chef Card */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/Student.png"
              alt="Best Chef"
              className="mb-4 w-20 h-20 object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              width={80} // Specify the width in pixels
              height={80} // Specify the height in pixels
            />

            <h3 className="text-lg font-semibold mb-2">Best Chef</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat
            </p>
          </div>

          {/* 120 Item Food Card */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/Coffee.png"
              alt="120 Item Food"
              className="mb-4 w-20 h-20 object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              width={80} // Matches w-20 in Tailwind (20 * 4 = 80px)
              height={80} // Matches h-20 in Tailwind (20 * 4 = 80px)
            />

            <h3 className="text-lg font-semibold mb-2">120 Item food</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat
            </p>
          </div>

          {/* Clean Environment Card */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/Person.png"
              alt="Clean Environment"
              className="mb-4 w-20 h-20 object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              width={80} // Matches w-20 in Tailwind (20 * 4 = 80px)
              height={80} // Matches h-20 in Tailwind (20 * 4 = 80px)
            />

            <h3 className="text-lg font-semibold mb-2">Clean Environment</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="bg-white-100">
        <div className="bg-orange-400 text-center py-20 text-white">
          <h2 className="text-4xl font-bold">Team Member</h2>
          <p className="mt-4 text-sm max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 py-10 max-w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover transform transition-all hover:scale-110"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              {member.social.length > 0 && (
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {member.social.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg bg-gray-800 p-3 rounded-full hover:bg-orange-400 transition-all"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Food Menu Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Head>
          <title>Food Menu</title>
        </Head>
        <div className="max-w-6xl w-full bg-white p-8 shadow-lg rounded-lg">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Our Food Menu
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-start sm:justify-center overflow-x-auto border-b mb-6 gap-5">
            <button className="text-yellow-500 border-b-2 border-yellow-500 pb-2 font-medium whitespace-nowrap hover:scale-105">
              Breakfast
            </button>
            <button className="text-gray-500 hover:text-yellow-500 pb-2 whitespace-nowrap hover:scale-105">
              Lunch
            </button>
            <button className="text-gray-500 hover:text-yellow-500 pb-2 whitespace-nowrap hover:scale-105">
              Dinner
            </button>
            <button className="text-gray-500 hover:text-yellow-500 pb-2 whitespace-nowrap hover:scale-105">
              Dessert
            </button>
            <button className="text-gray-500 hover:text-yellow-500 pb-2 whitespace-nowrap hover:scale-105">
              Drink
            </button>
            <button className="text-gray-500 hover:text-yellow-500 pb-2 whitespace-nowrap hover:scale-105">
              Snack
            </button>
          </div>

          {/* Two Column Grid for Menu Items */}
          <div className="grid grid-cols-2 gap-8">
            {Array(8)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-4 mb-4 last:border-b-0 last:mb-0 transition-transform transform hover:scale-105"
                >
                  {/* Menu Item Description */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Alder Grilled Chinook Salmon
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <p className="text-gray-400 text-sm">560 CAL</p>
                  </div>
                  {/* Price */}
                  <p className="text-yellow-500 font-bold text-lg">$32</p>
                </div>
              ))}
          </div>

          {/* View Menu Button */}
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-white border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-transform transform hover:scale-105">
              View menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
