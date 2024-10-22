import React from 'react';
import Link from 'next/link';

interface WhoWeAreProps {}

const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <main className="relative flex justify-center items-center w-full bg-gray-100 max-md:mt-0">
      {/* Ensure no space at the top on mobile */}
      <div className="absolute inset-0 top-0 z-[-1] w-full h-full">
        {/* Background Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f1d9eda55fb9e2cd5c6df3e0bc3b5773241be22daded90fc685cc361f0f568?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl px-4 py-16 sm:px-0 lg:px-8 max-md:py-6">
        {/* Left side: Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f1d9eda55fb9e2cd5c6df3e0bc3b5773241be22daded90fc685cc361f0f568?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
            alt="Who We Are"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right side: Text */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
            About Us
          </h2>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Who We Are?
          </h1>
          <div className="w-32 h-1 bg-blue-400 my-6"></div>
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tellus sit volutpat maecenas ut. Vestibulum egestas in donec cras.
          </p>
          <Link
            href="/Booking" // Redirects to the booking page
            className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-blue-400 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            aria-label="Book Appointment"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
