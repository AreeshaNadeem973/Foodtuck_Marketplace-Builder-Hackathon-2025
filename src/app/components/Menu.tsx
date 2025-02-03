import Image from "next/image"; // Import Image from Next.js

const Menu = () => {
  const menuItems = [
    { name: "Lettuce Leaf", price: "12.5$", image: "/img1.png" },
    { name: "Glow Cheese", price: "12.5$", image: "/img5.png" },
    { name: "Fresh Breakfast", price: "14.5$", image: "/img2.png" },
    { name: "Italian Pizza", price: "12.5$", image: "/img6.png" },
    { name: "Mild Butter", price: "12.5$", image: "/img3.png" },
    { name: "Slice Beef", price: "12.5$", image: "/img7.png" },
    { name: "Fresh Bread", price: "12.5$", image: "/img4.png" },
    { name: "Mushroom Pizza", price: "12.5$", image: "/img8.png" },
  ];

  return (
    <div className="bg-black text-white py-10 px-6">
      {/* Header */}
      <h2 className="text-center text-3xl font-semibold text-yellow-400">
        Choose & Pick
      </h2>
      <h3 className="text-center text-4xl font-bold mt-2 text-white">
        From Our Menu
      </h3>

      {/* Categories */}
      <div className="flex justify-center mt-8 space-x-6 text-lg font-medium flex-nowrap overflow-x-auto">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
          <button key={category} className="text-yellow-400 hover:text-yellow-500 py-2 px-4">
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row mt-12 gap-8">
        {/* Container for Leaf and Plate */}
        <div className="w-full md:w-1/3 flex flex-col items-center relative">
          {/* Leaf Image */}
          <Image
            src="/leaf.png"
            alt="Leaf"
            className="rounded-lg shadow-lg object-cover w-full"
            layout="responsive"
            width={500} // Specify width and height for better performance
            height={500}
          />
          {/* Plate Image (centered inside the leaf) */}
          <Image
            src="/fastfoody.png"
            alt="Plate"
            className="absolute w-48 h-48 md:w-80 md:h-80 object-cover"
            style={{
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            width={320}
            height={320}
          />
        </div>

        {/* Right: Menu Items */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4 transform transition-transform hover:scale-105 hover:-translate-y-2"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded object-cover"
                width={64}
                height={64}
              />
              <div>
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  Lorem nisi, et ac dapibus velit in consequat.
                </p>
                <div className="text-yellow-400 font-bold">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
