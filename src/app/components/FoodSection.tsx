
import Image from 'next/image';

const GridSection = () => {
  return (
    <div className="bg-black text-white py-16 px-8 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Column */}
      <div className="grid grid-cols-1 gap-4 md:w-1/3 w-full">
        <div className="transform transition-transform hover:scale-105 hidden md:block">
          <Image 
            src="/image1.png" 
            alt="Tacos" 
            width={500} 
            height={500} 
            className="rounded-lg w-full h-full object-cover" 
          />
        </div>
        <div className="transform transition-transform hover:scale-105 hidden md:block">
          <Image 
            src="/Yougurt.jpeg" 
            alt="Burger" 
            width={300} 
            height={300} 
            className="rounded-lg w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Middle Column with Two Images */}
      <div className="md:w-1/3 flex flex-col items-center justify-center my-4 md:my-0 md:px-4 w-full">
        <div className="w-full items-center justify-center transform transition-transform hover:scale-105 hidden md:block">
          <Image 
            src="/image3.png" 
            alt="Small Salad" 
            width={300} 
            height={500} 
            className="rounded-lg object-cover" 
          />
        </div>
        <div className="w-full  items-center justify-center mt-4 transform transition-transform hover:scale-105 hidden md:block">
          <Image 
            src="/image5.png" 
            alt="New Dish" 
            width={300} 
            height={500} 
            className="rounded-lg object-cover" 
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-cols-1 gap-4 md:w-1/3 w-full">
        <div className="transform transition-transform hover:scale-105 hidden md:block">
          <Image 
            src="/image2.png" 
            alt="Biryani" 
            width={300} 
            height={200} 
            className="rounded-lg w-full h-full object-cover" 
          />
        </div>
        <div className="transform transition-transform hover:scale-105 hidden md:block">
          <Image 
            src="/image4.png" 
            alt="Double Burger" 
            width={300} 
            height={200} 
            className="rounded-lg w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Text Section with White Box */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 w-full">
        <h2 className="text-yellow-500 font-semibold text-lg text-center md:text-left">
          Why Choose us
        </h2>
        <h1 className="text-4xl font-bold my-2 text-center md:text-left">
          <span className="text-yellow-500">Ex</span><span className="text-white">ta</span> ordinary taste <br /> And Experienced
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non, euismod vel at nulla. Mauris sed nisi vitae odio pellentesque venenatis.
        </p>

        {/* Icon Boxes */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="bg-yellow-500 p-4 rounded-lg mb-2">🍔</div>
            <p>Fast Food</p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="bg-yellow-500 p-4 rounded-lg mb-2">🥗</div>
            <p>Lunch</p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="bg-yellow-500 p-4 rounded-lg mb-2">🍽️</div>
            <p>Dinner</p>
          </div>
        </div>

        {/* White Box Section */}
        <div className="bg-white text-black font-bold flex items-center justify-center rounded-lg py-4 px-6 w-full max-w-xs mx-auto md:mx-0 transform transition-transform hover:scale-105">
          <span className="text-yellow-500 text-2xl mr-2">30+</span>
          <span className="text-lg">Years of <br /> <span className="text-gray-700">Experience</span></span>
        </div>
      </div>
    </div>
  );
};

export default GridSection;

