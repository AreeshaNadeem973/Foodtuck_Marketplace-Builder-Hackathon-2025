
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PiUserBold } from "react-icons/pi"; // User Icon
import { FiShoppingCart } from "react-icons/fi"; // Shopping Bag Icon
import { FaRegHeart } from "react-icons/fa"; // Heart icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Update the cart and wishlist count from localStorage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cart.reduce(
      (acc: number, item: { quantity: number }) => acc + item.quantity,
      0
    );
    setCartCount(count);
  };

  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCartCount();
    updateWishlistCount();

    // Event listener for localStorage changes
    const handleStorageChange = () => {
      updateCartCount();
      updateWishlistCount();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
          Food<span className="text-orange-500">tuck</span>
        </Link>

        {/* Small Screen Icons */}
        <div className="flex lg:hidden items-center space-x-4">
          <PiUserBold size={22} className="text-white" />
          <Link href="/Wishlist" className="relative" onClick={closeMenu}>
            <FaRegHeart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/ShoppingCart" className="relative" onClick={closeMenu}>
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "≡"}
          </div>
        </div>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/Menu" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Menu
          </Link>
          <Link href="/Blog" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/Error" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Pages
          </Link>
          <Link href="/About" className="hover:text-orange-500 transition" onClick={closeMenu}>
            About
          </Link>
          <Link href="/shoplist" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Shop
          </Link>
          <Link href="/ContactUs" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        {/* Large Screen Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/Wishlist" className="relative" onClick={closeMenu}>
            <FaRegHeart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/ShoppingCart" className="relative" onClick={closeMenu}>
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <PiUserBold size={22} className="text-white" onClick={closeMenu} />
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-black text-white mt-4 space-y-4 px-6`}>
        <div className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/Menu" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Menu
          </Link>
          <Link href="/Blog" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/Error" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Pages
          </Link>
          <Link href="/About" className="hover:text-orange-500 transition" onClick={closeMenu}>
            About
          </Link>
          <Link href="/shoplist" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Shop
          </Link>
          <Link href="/ContactUs" className="hover:text-orange-500 transition" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
