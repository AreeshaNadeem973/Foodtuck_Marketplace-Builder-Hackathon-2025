import Link from "next/link";
import Hero from "./Hero"; // Adjust path if needed

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden box-border">
      <Hero />
      {/* Signup Form Section */}
      <section className="p-4 sm:p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-full sm:w-[630px] text-center">
          {/* Hero Component */}
          <h3 className="text-[96px] sm:text-[72px] font-bold text-[#FF9F0D] mb-6">
            404
          </h3>
          <p className="font-bold text-[32px] sm:text-[24px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] sm:text-base mb-4">
            Page cannot be found! We&apos;ll have it figured out in no time.
          </p>
          <p className="text-[18px] sm:text-base mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] sm:text-base font-bold px-6 py-2 rounded hover:bg-[#e8890b] transition-transform transform hover:scale-105">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
