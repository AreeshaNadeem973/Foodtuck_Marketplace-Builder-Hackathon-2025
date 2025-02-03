import React from "react";
import Image from "next/image"; // Make sure to import Image from next/image

const StatsSection = () => {
  return (
    <div>
      {/* Statistics Section */}
      <section
        className="py-12 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/bg1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto text-center text-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              {
                number: "420",
                label: "Professional Chefs",
                icon: "/image9.png",
              },
              {
                number: "320",
                label: "Items Of Food",
                icon: "/image8.png",
              },
              {
                number: "30+",
                label: "Years Of Experience",
                icon: "/image7.png",
              },
              {
                number: "220",
                label: "Happy Customers",
                icon: "/image6.png",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {/* Icon Image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={60}
                    height={60}
                  />
                </div>
                {/* Stat Number */}
                <h2 className="text-4xl font-bold text-orange-500">
                  {stat.number}
                </h2>
                {/* Stat Label */}
                <p className="text-md mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
