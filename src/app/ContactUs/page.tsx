import Link from "next/link";
import Image from "next/image"; // Import the Image component
import Hero from "./Hero";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />
    {/* Signup Form Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-lg bg-white shadow-lg rounded-md p-8 space-y-8">
          <h3 className="text-2xl font-bold text-center">Contact Us</h3>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input id="remember" type="checkbox" className="mr-2" />
              <label htmlFor="remember">Remember me?</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Contact Us
            </button>

            {/* Forgot Password Link */}
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
                Forgot password?
              </Link>
            </p>
          </form>

          {/* Alternate Sign-In Options */}
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image
                src="/google.png"
                alt="Google"
                className="h-6 mr-2"
                width={24}
                height={24} // Specify width and height for optimization
              />
              Sign in with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image
                src="/apple1.png"
                alt="Apple"
                className="h-6 mr-2"
                width={24}
                height={24} // Specify width and height for optimization
              />
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
