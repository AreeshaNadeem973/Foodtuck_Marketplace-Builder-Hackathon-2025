import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import Image from "next/image"; // Import the Image component

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
      image: "/DoubbleBurger.png",
    },
    {
      id: 2,
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
      image: "/Pizza0.png",
    },
    {
      id: 3,
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
      image: "/lemon0.png",
    },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-orange-500 text-lg font-semibold">Blog Post</h2>
          <h1 className="text-4xl font-bold">
            La<span className="text-yellow-500">test News & Blog</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-black-100 border border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="relative w-full h-96">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill" // Ensure the image fills the container
                  objectFit="cover" // Crop the image to fit the container
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-yellow-500">{post.date}</p>
                <h3 className="text-lg font-semibold mb-4">{post.title}</h3>
                <div className="flex justify-between items-center">
                  <button className="text-yellow-500 font-medium hover:underline">
                    Learn More
                  </button>
                  <div className="flex space-x-3 text-gray-400">
                    <div className="hover:text-yellow-500 cursor-pointer">
                      <FaThumbsUp />
                    </div>
                    <div className="text-yellow-500 cursor-pointer">
                      <FaComment />
                    </div>
                    <div className="hover:text-yellow-500 cursor-pointer">
                      <FaShare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
