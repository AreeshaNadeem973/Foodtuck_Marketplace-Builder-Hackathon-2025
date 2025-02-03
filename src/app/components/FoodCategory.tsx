import Image from "next/image";

export default function FoodCategory() {
  return (
    <div className="bg-black text-white py-10 overflow-x-hidden">
      {/* Header Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        <span className="text-yellow-500">Food Category</span>
      </h2>
      <h3 className="text-center text-4xl font-bold mb-10">
        <span className="text-yellow-400">Choose</span> Food Item
      </h3>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center px-4 sm:px-6 lg:px-10">
        {/* Fast Food Dish */}
        <div className="relative transform transition-transform hover:scale-105">
          <Image
            src="/fastfood.png"
            alt="Fast Food Dish"
            width={500}
            height={800}
            className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-96"
          />
          <Image
            src="/tag.png"
            alt="Overlay Icon"
            width={100}
            height={100}
            className="absolute bottom-10 left-0 px-0 py-0"
          />
        </div>

        {/* Burger */}
        <div className="relative transform transition-transform hover:scale-105">
          <Image
            src="/burger.png"
            alt="Burger"
            width={500}
            height={800}
            className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-96"
          />
        </div>

        {/* Salad */}
        <div className="relative transform transition-transform hover:scale-105">
          <Image
            src="/salad.png"
            alt="Salad"
            width={500}
            height={800}
            className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-96"
          />
        </div>

        {/* Dessert */}
        <div className="relative transform transition-transform hover:scale-105">
          <Image
            src="/desert.png"
            alt="Dessert"
            width={500}
            height={800}
            className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-96"
          />
        </div>
      </div>
    </div>
  );
}
