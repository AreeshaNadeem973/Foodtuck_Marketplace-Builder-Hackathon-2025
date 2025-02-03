import Image from "next/image";
import Link from "next/link"; // Import the Link component from Next.js

export default function MeetOurChef() {
  const chefs = [
    {
      Image: "/Chef1.png",
    },
    {
      Image: "/Chef2.png",
    },
    {
      Image: "/Chef3.png",
    },
    {
      Image: "/Chef4.png",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-5">
      <div className="text-center">
        <h3 className="text-yellow-500">Chefs</h3>
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-yellow-500">Meet</span> Our Chef
        </h2>
      </div>

      {/* Grid for Chefs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="rounded-lg p-5 text-center shadow-lg border-2 border-black transform transition-transform hover:scale-105 hover:shadow-2xl hover:border-yellow-500"
          >
            <Image
              src={chef.Image}
              alt={`Chef ${index + 1}`}
              width={300}
              height={300}
              className="rounded-md mx-auto"
            />
          </div>
        ))}
      </div>

      {/* See More Button with Link */}
      <div className="text-center mt-8">
        <Link href="/Chef"> {/* Link to the Chef page */}
          <button className="bg-yellow-500 px-5 py-2 rounded-md hover:bg-yellow-400 transition">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
