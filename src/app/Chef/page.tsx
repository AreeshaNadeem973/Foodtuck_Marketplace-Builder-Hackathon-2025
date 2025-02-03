"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Hero from "./Hero"; // Import the Hero component

interface Chef {
  _id: string;
  name: string;
  position: string;
  specialty: string;
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
}

const ChefCard: React.FC<{ chef: Chef }> = ({ chef }) => {
  return (
    <div className="max-w-xs rounded-lg border border-gray-300 shadow-md overflow-hidden my-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-500">
      <div className="relative w-full h-64 sm:h-80">
        <Image
          src={chef.image.asset.url}
          alt={chef.name}
          width={600}
          height={320}
          className="object-cover w-full h-full"
          unoptimized={true}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{chef.name}</h2>
        <p className="text-sm text-gray-600">{chef.position}</p>
        <p className="text-sm text-gray-500">{chef.specialty}</p>
      </div>
    </div>
  );
};

const ChefList: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data: Chef[] = await client.fetch(`
          *[_type == "chef"] {
            _id,
            name,
            position,
            specialty,
            image {
              asset-> {
                url
              }
            },
            description
          }
        `);
        setChefs(data);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };
    fetchChefs();
  }, []);

  return (
    <div>
      <Hero /> {/* Include the Hero component here */}
      <div className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <ChefCard key={chef._id} chef={chef} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefList;
