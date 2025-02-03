"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Hero from "./Hero";
import { AiOutlineCheck } from "react-icons/ai";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCharge] = useState<number>(10);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadCart = () => {
      setIsLoading(true);
      try {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
      } catch (error) {
        console.error("Error loading cart:", error);
        setCartItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
    window.addEventListener("storage", loadCart);
    return () => {
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = new Set(prevWishlist);
      updatedWishlist.has(id)
        ? updatedWishlist.delete(id)
        : updatedWishlist.add(id);
      return updatedWishlist;
    });
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    setDiscount(couponCode.trim().toUpperCase() === "DISCOUNT10" ? 0.1 : 0);
  };

  const finalTotal = (totalAmount + shippingCharge) * (1 - discount);

  const handleProceedToCheckout = () => {
    setToastMessage("Your order is being processed!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-center">Loading cart...</div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-auto bg-gray-100 relative">
      <Hero />
      <div className="container mx-auto p-6">
        {cartItems.length === 0 ? (
          <p className="text-lg text-center">
            Your cart is empty.{" "}
            <Link href="/shoplist" className="text-orange-500 hover:underline">
              Continue shopping
            </Link>
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4 w-full"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="flex-1 ml-4 mt-4 sm:mt-0">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center border rounded-md px-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-lg"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          readOnly
                          className="w-12 text-center bg-transparent border-none focus:outline-none"
                        />
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-lg"
                        >
                          +
                        </button>
                      </div>
                      {wishlist.has(item.id) ? (
                        <MdFavorite
                          className="text-red-500 text-xl cursor-pointer"
                          onClick={() => toggleWishlist(item.id)}
                        />
                      ) : (
                        <MdFavoriteBorder
                          className="text-gray-500 text-xl cursor-pointer"
                          onClick={() => toggleWishlist(item.id)}
                        />
                      )}
                      <AiOutlineDelete
                        className="text-gray-500 text-xl cursor-pointer"
                        onClick={() => removeItem(item.id)}
                      />
                    </div>
                  </div>
                  <p className="ml-6 font-bold mt-2 sm:mt-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Coupon and Total Bill Section */}
      <div className="flex flex-col sm:flex-row sm:gap-8 mt-6">
        {/* Coupon Code Section */}
        <div className="flex-1 sticky top-0 bg-white p-4">
          <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">
            Enter a coupon code for discounts.
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter code"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm sm:text-base"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
              onClick={applyCoupon}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Total Bill Section */}
        <div className="flex-1 sticky top-0 bg-white p-4">
          <h2 className="text-xl font-bold mb-4">Total Bill</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700 text-sm sm:text-base">
              <span>Cart Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm sm:text-base">
              <span>Shipping Charge</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                <span>Discount</span>
                <span>-${(totalAmount * discount).toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold sm:text-base">
              <span>Total Amount</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
          <Link href="/Checkout">
            <button
              onClick={handleProceedToCheckout}
              className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
            >
              Proceed to Checkout ↗
            </button>
          </Link>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2">
          <AiOutlineCheck className="text-white text-lg" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
