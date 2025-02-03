"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai"; // Import the checkmark icon
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Hero from "./Hero";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface BillingInfo {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCharge] = useState<number>(10);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null); // State for toast
  const [formError, setFormError] = useState<string | null>(null); // State for form error

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
    window.dispatchEvent(new Event("storage"));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const toggleWishlist = (id: string) => {
    const updatedWishlist = new Set(wishlist);
    if (updatedWishlist.has(id)) {
      updatedWishlist.delete(id);
    } else {
      updatedWishlist.add(id);
    }
    setWishlist(updatedWishlist);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    if (discount === 0) {
      setDiscount(0.1); // Example discount logic
    } else {
      setDiscount(0);
    }
  };

  const finalTotal = (totalAmount + shippingCharge) * (1 - discount);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handlePlaceOrder = () => {
    // Form validation
    if (
      !billingInfo.firstName ||
      !billingInfo.lastName ||
      !billingInfo.address ||
      !billingInfo.city ||
      !billingInfo.zipCode ||
      !billingInfo.phoneNumber ||
      !billingInfo.email
    ) {
      setFormError("Please fill out all the form fields.");
      return;
    }

    // Show toast notification
    setToastMessage("Your order has been placed successfully!");

    // Hide toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-center">Loading cart...</div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="container mx-auto p-6 relative flex flex-col sm:flex-row gap-8">
        {/* Left Column (Cart Items Summary) */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-lg text-center">
              Your cart is empty.{" "}
              <Link href="/" className="text-orange-500 hover:underline">
                Continue shopping
              </Link>
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4"
                >
                  {/* Product Image */}
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1 ml-4 mt-4 sm:mt-0">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity, Wishlist, and Delete in One Line */}
                    <div className="flex items-center space-x-4 mt-2">
                      {/* Quantity Box */}
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

                      {/* Wishlist Icon */}
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

                      {/* Delete Icon */}
                      <AiOutlineDelete
                        className="text-gray-500 text-xl cursor-pointer"
                        onClick={() => removeItem(item.id)}
                      />
                    </div>
                  </div>

                  {/* Item Total on the Right */}
                  <p className="ml-6 font-bold mt-2 sm:mt-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (Billing Information) */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg sticky top-0">
          <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
          <div className="space-y-4">
            {/* Billing Inputs */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={billingInfo.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={billingInfo.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingInfo.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingInfo.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={billingInfo.zipCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={billingInfo.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />

            {/* Total Bill Section */}
            <div>
              <h3 className="text-xl font-semibold">Total Bill</h3>
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
            </div>
            <Link href="/Payment">
              <button
                onClick={handlePlaceOrder}
                className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
              >
                Place Order ↗
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg flex items-center space-x-3">
          <AiOutlineCheck className="text-2xl" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Form Error Message */}
      {formError && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg flex items-center space-x-3">
          <AiOutlineCheck className="text-2xl" />
          <span>{formError}</span>
        </div>
      )}
    </div>
  );
}
