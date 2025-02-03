"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoHeart } from "react-icons/io5"; // Heart icon for removing from wishlist
import Hero from "./Hero"; // Hero component for styling

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Update wishlist state from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Update the wishlist count in Navbar (LocalStorage will trigger navbar updates)
    window.dispatchEvent(new Event("storage"));
  };

  interface WishlistItem {
    id: number;
    name: string;
    image: string;
    price: number;
  }

  return (
    <div>
      <Hero />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Saved Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800 mt-2"
                >
                  <IoHeart size={24} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
