import React from "react";
import Link from "next/link"; // Import Link component from Next.js

const ServicesSection: React.FC = () => {
  return (
    <section className="pr-px pl-20 mt-0 w-full bg-neutral-900 max-md:pl-5 max-md:mt-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full font-bold max-md:mt-10">
            {/* Reduce font size */}
            <h2 className="text-4xl leading-8 text-stone-50">
              What we are <br /> Doing
            </h2>
            {/* Reduce spacing and padding */}
            <div className="flex flex-col items-start self-stretch pl-2 mt-4 text-sm leading-6 text-neutral-400">
              <div className="shrink-0 border-blue-400 border-solid border-[3px] h-[3px] w-[100px]" />
              <p className="self-stretch mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna enim, quis
                nostrud laboris.
              </p>
              <ul className="mt-6 list-disc pl-5">
                <li className="mt-1.5">
                  Lorem ipsum dolor sit amet, consectetu
                </li>
                <li className="mt-1.5">Lorem ipsum dolor</li>
                <li className="mt-1.5">Lorem ipsum dolor sit</li>
              </ul>
            </div>
            <div className="flex gap-4 mt-6 w-full text-base text-white max-md:mt-8">
              {/* Use Link for See More button */}
              <Link href="/blog">
                <button className="self-stretch px-6 py-2 bg-blue-400 rounded-[100px] max-md:px-5">
                  See More
                </button>
              </Link>
              {/* Use Link for Contact Us button */}
              <Link href="/ContactUs">
                <button className="self-stretch px-6 py-2 border border-blue-400 border-solid rounded-[100px] max-md:px-5">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
          <div className="flex grow text-xs leading-none whitespace-nowrap text-neutral-400 max-md:mt-10 max-md:max-w-full">
            {/* Constrain image height */}
            <img
              loading="lazy"
              src="/images/image 19.png"
              alt="Service illustration"
              className="object-contain grow shrink-0 h-[400px] max-md:h-[200px] w-full"
            />
            <span className="self-start mt-[200px] max-md:mt-10">Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
