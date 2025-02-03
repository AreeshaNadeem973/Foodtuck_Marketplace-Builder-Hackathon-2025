"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Food } from "../page";
import { urlFor } from "@/sanity/lib/image";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa"; // Checkmark icon for toast
import { IoHeart, IoHeartOutline } from "react-icons/io5"; // Heart icons for wishlist
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [product, setProduct] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(""); // Dynamic toast message
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const { id } = await params;
      const fetchedProduct: Food[] = await client.fetch(
        `*[_id == "${id}"]{
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
      setProduct(fetchedProduct[0]);
      setLoading(false);
    };

    fetchProduct();
  }, [params]);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cart.reduce(
      (acc: number, item: { quantity: number }) => acc + item.quantity,
      0
    );
    window.dispatchEvent(new Event("storage")); // Trigger storage event to notify other components (e.g., Navbar)
  };

  const addToCart = () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingProductIndex = existingCart.findIndex(
        (item: { id: string }) => item.id === product?._id
      );

      if (existingProductIndex >= 0) {
        existingCart[existingProductIndex].quantity += quantity;
      } else {
        const newProduct = {
          id: product?._id,
          name: product?.name,
          price: product?.price,
          quantity: quantity,
          image: product?.image ? urlFor(product.image).url() : "",
        };
        existingCart.push(newProduct);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      updateCartCount(); // Update cart count in Navbar

      // Set the toast message with the product name
      setToastMessage(`${product?.name} added to cart successfully!`);
      setShowToast(true); // Show the toast notification
      setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert(
        "There was an error adding the product to the cart. Please try again."
      );
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const toggleWishlist = () => {
    try {
      const existingWishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      const existingProductIndex = existingWishlist.findIndex(
        (item: { id: string }) => item.id === product?._id
      );

      if (existingProductIndex >= 0) {
        // Remove from wishlist
        existingWishlist.splice(existingProductIndex, 1);
        setIsInWishlist(false);
        setToastMessage(`Removed ${product?.name} from wishlist!`);
      } else {
        // Add to wishlist
        const newProduct = {
          id: product?._id,
          name: product?.name,
          price: product?.price,
          image: product?.image ? urlFor(product.image).url() : "",
        };
        existingWishlist.push(newProduct);
        setIsInWishlist(true);
        setToastMessage(`Added ${product?.name} to wishlist!`);
      }

      localStorage.setItem("wishlist", JSON.stringify(existingWishlist));

      // Show the toast notification for wishlist
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    } catch (error) {
      console.error("Error managing wishlist:", error);
      alert("There was an error with the wishlist. Please try again.");
    }
  };

  useEffect(() => {
    const existingWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    const productInWishlist = existingWishlist.some(
      (item: { id: string }) => item.id === product?._id
    );
    setIsInWishlist(productInWishlist);
  }, [product]);

  if (loading) return <div className="container mx-auto p-6">Loading...</div>;

  return (
    <div>
      <Hero />
      {product && (
        <div key={product._id}>
          <div className="container mx-auto p-6">
            {/* Product Page Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Vertical Images */}
              <div className="flex flex-col items-center lg:flex-row lg:space-x-6">
                {/* Thumbnails */}
                <div className="flex flex-wrap gap-4 justify-center lg:flex-col lg:mr-6 lg:mt-10">
                  {["/row1.png", "/row2.png", "/row3.png", "/row4.png"].map(
                    (image, index) => (
                      <div
                        key={index}
                        className="w-24 h-24 overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform"
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
                {/* Main Image */}
                <div className="flex-1 w-full lg:w-auto mt-10">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>

              <div className="space-y-6 mt-10">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>

                {/* Price */}
                <div className="flex items-center mt-4">
                  <p className="text-2xl font-bold">${product.price}</p>
                </div>

                <div className="ml-4 flex items-center">
                  <p className="text-yellow-500 text-lg">★★★★★</p>
                  <span className="ml-2 text-gray-500">| 5.0 Rating</span>
                  <span className="ml-2 text-gray-500">| 22 Reviews</span>
                </div>
                {/* Description */}
                <p className="text-sm text-gray-500 mt-4">
                  Dictum/cursus/Risus
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  onClick={addToCart}
                  disabled={loading}
                >
                  {loading ? "Adding to cart..." : "Add to Cart"}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={toggleWishlist}
                  className={`${
                    isInWishlist ? "text-red-600" : "text-gray-600"
                  } hover:text-gray-800 flex items-center`}
                >
                  {isInWishlist ? (
                    <IoHeart className="mr-2" />
                  ) : (
                    <IoHeartOutline className="mr-2" />
                  )}
                  {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>

                {/* Category and Tag */}
                <div className="mt-4">
                  <p>
                    <strong>{product.category}:</strong> Pizza
                  </p>
                  <p>
                    <strong>{product.tags}:</strong> Our Shop
                  </p>
                </div>

                {/* Share Section */}
                <div className="mt-6">
                  {" "}
                  <p className="text-gray-700 font-semibold">Share:</p>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 bg-gray-200 p-2 rounded-full"
                    >
                      <FaYoutube className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 bg-gray-200 p-2 rounded-full"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 bg-gray-200 p-2 rounded-full"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 bg-gray-200 p-2 rounded-full"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 bg-gray-200 p-2 rounded-full"
                    >
                      <IoSearch className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description and Reviews */}
          <div className="p-6">
            <div className="flex space-x-4 mb-6">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-orange-600">
                Description
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg focus:outline-none hover:bg-gray-300">
                Reviews (24)
              </button>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <p className="mb-4 text-gray-700">
                Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
                sed purus augue, eu euismod tellus. Nam mattis eros nec mi
                sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer
                at justo eget sem auctor auctor eget vitae arcu. Nam tempor
                malesuada porttitor.
              </p>
              <p className="mb-4 text-gray-700">
                Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
                Curabitur blandit justo urna, id porttitor est dignissim nec.
                Pellentesque scelerisque hendrerit posuere. Sed at dolor quis
                nisi rutrum accumsan et sagittis massa.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                <li>
                  Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
                  nisl.
                </li>
                <li>
                  Etiam nec massa et lectus faucibus ornare congue in nunc.
                </li>
                <li>Mauris eget diam magna, in blandit turpis.</li>
              </ul>
            </div>
          </div>

          {/* Similar Products Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  id: 1,
                  name: "Fresh Lime",
                  price: "$38.00",
                  originalPrice: "$45.00",
                  image: "/Pasta.jpeg",
                },
                {
                  id: 2,
                  name: "Chocolate Muffin",
                  price: "$28.00",
                  image: "/desert.png",
                },
                {
                  id: 3,
                  name: "Burger",
                  price: "$21.00",
                  image: "/Burger1.png",
                },
                {
                  id: 4,
                  name: "Fresh Lime",
                  price: "$38.00",
                  originalPrice: "$45.00",
                  image: "/Pasta.jpeg",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <p className="text-orange-500 font-semibold text-lg">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-500 line-through text-sm">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification with Tick and Product Name */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg flex items-center">
          <FaCheck className="mr-2 text-white" /> {/* Checkmark icon */}
          {toastMessage} {/* Product name included in the message */}
        </div>
      )}
    </div>
  );
}











































































































































































































































