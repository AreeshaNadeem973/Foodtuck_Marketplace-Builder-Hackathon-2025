import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function ProductPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Product Page Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Vertical Images */}
        <div className="flex">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 mr-6 mt-10">
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
          <div className="flex-1">
            <Image
              src="/burger.png" // Replace this with the main product image
              alt="Yummy Chicken Chup"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          {/* In Stock and Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block">
              In Stock
            </button>

            {/* Prev/Next Navigation */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800 flex items-center">
                <span className="mr-2">←</span> Prev
              </button>
              <button className="text-gray-600 hover:text-gray-800 flex items-center">
                Next <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          {/* Product Title */}
          <h1 className="text-3xl font-bold">Yummy Chicken Chup</h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non.
          </p>
          {/* Price and Rating */}
          <div className="flex items-center mt-4">
            <p className="text-2xl font-bold">$54.00</p>
          </div>
          <div className="ml-4 flex items-center">
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <span className="ml-2 text-gray-500">| 5.0 Rating</span>
            <span className="ml-2 text-gray-500">| 22 Reviews</span>
          </div>
          {/* Description */}
          <p className="text-sm text-gray-500 mt-4">Dictum/cursus/Risus</p>
          {/* Quantity and Add to Cart */}
          <div className="flex items-center mt-6">
            <div className="flex border-2 border-black rounded-lg overflow-hidden">
              <button className="px-5 py-2 bg-gray-100 hover:bg-gray-200">
                -
              </button>
              <div className="h-8 w-px bg-black"></div>
              <input
                type="number"
                className="w-16 text-center border-0"
                defaultValue="1"
                min="1"
              />
              <div className="h-8 w-px bg-black"></div>
              <button className="px-5 py-2 bg-gray-100 hover:bg-gray-200">
                +
              </button>
            </div>
            <button className="ml-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
              Add to cart
            </button>
          </div>
          {/* Wishlist and Compare */}
          <div className="mt-4 flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-800 flex items-center">
              ❤ Add to Wishlist
            </button>
            <button className="text-gray-600 hover:text-gray-800 flex items-center">
              🔄 Compare
            </button>
          </div>
          {/* Category and Tag */}
          <div className="mt-4">
            <p>
              <strong>Category:</strong> Pizza
            </p>
            <p>
              <strong>Tag:</strong> Our Shop
            </p>
          </div>{" "}
          {/* Share Section */}{" "}
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

      <div className="p-6">
        {/* Top Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-orange-600">
            Description
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg focus:outline-none hover:bg-gray-300">
            Reviews (24)
          </button>
        </div>

        {/* Content Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="mb-4 text-gray-700">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
            sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          </p>
          <p className="mb-4 text-gray-700">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
            accumsan et sagittis massa.
          </p>

          {/* Key Benefits */}
          <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
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
            { id: 3, name: "Burger", price: "$21.00", image: "/Burger1.png" },
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
  );
}














// **************************































