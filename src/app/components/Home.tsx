
import Image from "next/image"; // Import the Image component from Next.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center lg:gap-16 relative w-full mt-0 overflow-hidden">

        {/* Left Vertical Line with Icon */}
        <div className="absolute left-0 lg:left-8 top-0 w-[30px] h-full flex-col items-center hidden lg:flex overflow-hidden">
          {/* Top Vertical Line */}
          <Image
            src="/line.png" // Use Image component for optimization
            alt="Top Vertical Line"
            layout="fill" // This makes the image fill its container
            objectFit="cover" // Optional: Adjusts how the image fills the container
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[472px] mt-20 lg:mt-20 ml-4 lg:ml-16 rounded-lg">
          <div className="text-white space-y-6">
            <h3 className="text-yellow-400 italic text-xl font-medium">
              As Quick & Amusing!
            </h3>
            <h1 className="text-3xl lg:text-4xl font-extrabold">
              The <span className="text-yellow-400">Art</span> of speed <br />
              food <span className="text-yellow-400">Quality</span>
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>
            <br />
            <Link href="/Menu">
            <button className="bg-yellow-400 text-black font-medium px-6 py-3 rounded-lg hover:bg-yellow-500">
              See Menu
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Food Image) */}
        <div className="relative mt-4 lg:mt-10 lg:w-1/2 w-full">
          {/* Main Dish Image */}
          <div className="relative">
            <Image
              src="/Food.png" // Use Image component for optimization
              alt="Dish"
              className="rounded-lg shadow-lg w-full h-auto"
              width={600} // Specify width and height for better performance
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}





