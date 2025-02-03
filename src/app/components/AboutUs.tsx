import React from 'react';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-yellow-400 font-semibold text-lg">About us</h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            We Create the Best <span className="text-yellow-400">foody product</span>
          </h1>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Uma, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✔</span>
              Lacus nisi, at ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <Link href="/About">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500">
            Read More
          </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4">
          {/* Top Image */}
          <div className="w-full relative h-40 sm:h-60 md:h-72 transform transition-transform hover:scale-105">
            <Image
              src="/Egg.jpeg"
              alt="Egg Dish"
              layout="fill" // Fill the container
              objectFit="cover" // Crop to fit the container
              className="rounded-lg"
            />
          </div>
          {/* Bottom Row of Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-32 sm:h-40 transform transition-transform hover:scale-105">
              <Image
                src="/bread.png"
                alt="Side Dish 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-32 sm:h-40 transform transition-transform hover:scale-105">
              <Image
                src="/Sandwich.jpeg"
                alt="Side Dish 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
