"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Hero from "./Hero";

// Blog Images
const blogImages = [
  {
    id: 1,
    image: "/lemony.png",
    title: "10 Reasons To Do A Digital Detox Challenge",
  },
  {
    id: 2,
    image: "/cheezyPizza.png",
    title: "Exploring Digital Wellness Strategies",
  },
  {
    id: 3,
    image: "/daal.png",
    title: "The Impact of Technology on Mental Health",
  },
  {
    id: 4,
    image: "/sand.png",
    title: "Balancing Screen Time and Real Life",
  },
];

// Sidebar Data
const sideImages = [
  {
    id: 1,
    image: "/pix1.png",
    title: "Recent Post 1",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 2,
    image: "/pix2.png",
    title: "Recent Post 2",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 3,
    image: "/pix4.png",
    title: "Recent Post 3",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 4,
    image: "/pix3.png",
    title: "Recent Post 4",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
];

// Filter Menu
const filterMenu = [
  {
    id: 1,
    image: "/pix5.png",
    title: "Chicken Fry",
    available: "26",
  },
  {
    id: 2,
    image: "/pix6.png",
    title: "Burger Food",
    available: "46",
  },
  {
    id: 3,
    image: "/pix8.png",
    title: "Pizza",
    available: "16",
  },
  {
    id: 4,
    image: "/pix9.png",
    title: "Fresh Fruits",
    available: "36",
  },
  {
    id: 5,
    image: "/pix10.png",
    title: "Vegetables",
    available: "16",
  },
];

// PopularTags Component
const PopularTags = () => {
  const tags = [
    "Sandwich",
    "Tikka",
    "Bbq",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  return (
    <div className="p-4 bg-gray-50 border border-gray-300 rounded-md shadow-sm max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 border border-gray-200 rounded hover:bg-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images] = useState({ blogImages, sideImages, filterMenu });

  return (
    <div className="overflow-x-hidden box-border">
      <div className="mb-20">
        <Hero />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Main Blog Content */}
        <div className="w-full lg:w-1/2 xl:w-2/3 space-y-6">
          {images.blogImages.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl p-4"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>
                <button className="w-full sm:w-auto text-sm sm:text-base bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transition-transform transform hover:scale-105 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 xl:w-1/4 space-y-6">
          {/* Search Bar */}
          <div className="flex mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Search Your Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow text-sm sm:text-base bg-gray-100 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-3 sm:px-4"
            />
            <button className="bg-orange-500 text-white p-2 sm:p-3 rounded-r-lg hover:bg-orange-600 hover:shadow-lg transition-transform transform hover:scale-105">
              🔍
            </button>
          </div>

          {/* Author Info */}
          <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="w-32 h-32 mx-auto mt-4">
              <div className="w-32 h-32 mx-auto mt-4 relative">
                <Image
                  className="rounded-full"
                  src="/man-business.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  sizes="128px"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Prince Miyako
              </h2>
              <p className="text-gray-600">Blogger/Photographer</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(1 Review)</span>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Veritatis distinctio, odio eligendi suscipit reprehenderit at.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaPinterest className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div className="border rounded-lg p-3 sm:p-4 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">
              Recent Posts
            </h3>
            {images.sideImages.map((img) => (
              <div
                key={img.id}
                className="flex mb-3 sm:mb-4 space-x-3 sm:space-x-4 items-center"
              >
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={img.image}
                    alt={img.title}
                    layout="fill"
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold">
                    {img.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    {img.date}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1 sm:mt-2">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Filter By Menu */}
          <div className="border rounded-lg p-3 sm:p-4 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">
              Filter By Menu
            </h3>
            {images.filterMenu.map((item) => (
              <div
                key={item.id}
                className="flex mb-3 sm:mb-4 space-x-3 sm:space-x-4 items-center"
              >
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 flex font-extrabold justify-between items-center">
                  <h4 className="text-xs sm:text-sm font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-600">
                    {item.available}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Tags */}
          <PopularTags />
        </div>
      </div>
    </div>
  );
}
