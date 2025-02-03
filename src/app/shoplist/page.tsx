
"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Hero from "./Hero";
import Link from "next/link";

export interface Food {
  quantity?: number;
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
  available: boolean;
}

// Fetch food data inside useEffect (Client Side)
const FoodList = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortOrder, setSortOrder] = useState<string>("newest");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data: Food[] = await client.fetch(
          `*[_type == "food"]{
            _id,
            name,
            category,
            price,
            originalPrice,
            tags,
            image{
              asset->{
                url
              }
            },
            description,
            available
          }`
        );
        setFoods(data);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((food) => food.category))
        );
        setCategories(["All", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  const handleCategoryChange = (category: string) =>
    setSelectedCategory(category);
  const handleSortChange = (sort: string) => setSortOrder(sort);

  const handlePriceRangeChange = (value: number) => setPriceRange([0, value]);

  const handleItemsPerPageChange = (items: string) => {
    let newPriceRange: [number, number];

    if (items === "default") {
      newPriceRange = [0, 100]; // Default to show all items
    } else if (items === "25") {
      newPriceRange = [0, 25];
    } else if (items === "50") {
      newPriceRange = [25, 50];
    } else {
      newPriceRange = [0, 100];
    }

    setPriceRange(newPriceRange);
  };

  // Sorting and Filtering
  const filteredFoods = foods
    .filter(
      (food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || food.category === selectedCategory) &&
        food.price >= priceRange[0] &&
        food.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <Hero />
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 bg-white shadow-md space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <label htmlFor="sort" className="text-gray-600 font-medium">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48"
          >
            <option value="newest">Newest</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            {" "}
            <label htmlFor="show" className="text-gray-600 font-medium">
              {" "}
              Show:{" "}
            </label>{" "}
            <select
              id="show"
              value={priceRange[1]}
              onChange={(e) => handleItemsPerPageChange(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48"
            >
              {" "}
              <option value="default">Default</option>{" "}
              <option value="25">25</option> <option value="50">50</option>{" "}
            </select>{" "}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/4 bg-white p-6 shadow-md rounded-lg">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Search Product</h3>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Category</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/Banner1.png"
            alt="Price filter illustration"
            className="w-full h-auto mb-4 rounded-lg"
          />

          <div>
            <h3 className="text-lg font-semibold mb-3">Filter by Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => handlePriceRangeChange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-gray-600 text-sm mt-2">
              <span>$0</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredFoods.slice(0, 6).map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </main>
      </div>
    </div>
  );
};

// Food Card Component
const FoodCard = ({ food }: { food: Food }) => (
  <Link href={`/shoplist/${food._id}`}>
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg w-full sm:w-72 mx-2 my-4 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={food.image.asset.url}
          alt={food.name}
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mt-2">{food.name}</h2>
        <p className="text-md text-green-600">
          Price: ${food.price}
          <span className="text-gray-400 line-through ml-2">
            ${food.originalPrice}
          </span>
        </p>
      </div>
    </div>
  </Link>
);

export default FoodList;
