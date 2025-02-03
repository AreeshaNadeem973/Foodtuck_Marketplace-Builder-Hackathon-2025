import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="bg-black text-white py-14 px-5 relative">
      {/* Section Header */}
      <div className="flex justify-start mb-8">
        <div className="text-left">
          <p className="text-yellow-500 italic text-lg">Testimonials</p>
          <h2 className="text-3xl font-bold mt-2">What our clients are saying</h2>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="mt-10 flex justify-center">
        <div className="bg-white text-black rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 relative py-8 px-6">
          {/* Client Image */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/face.png" // Replace with your image in public folder
              alt="Client"
              width={80}
              height={80}
              className="rounded-full border-4 border-black"
            />
          </div>

          {/* Testimonial Content */}
          <div className="mt-12 text-center">
            {/* 99 Text - Positioned above the paragraph */}
            <div className="mb-4">
              <span className="text-yellow-500 font-bold text-xl">99</span>
            </div>

            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>

            {/* Stars */}
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-400 text-xl ${
                    index < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Client Name */}
            <h3 className="text-xl font-bold mt-4">Alamin Hasan</h3>
            <p className="text-gray-500 text-sm">Food Specialist</p>
          </div>
        </div>
      </div>

      {/* Navigation Circles */}
      <div className="flex justify-center mt-6">
        {[...Array(4)].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === 0 ? "bg-yellow-500" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
