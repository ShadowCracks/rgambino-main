import React from "react";  // Ensure this is at the top!

const Testimonial: React.FC = () => {
  return (
    <section className="flex relative flex-col items-end px-20 pt-64 mt-8 w-full bg-blend-luminosity min-h-[488px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="/images/testimonial.png"  // Correct path for the public folder in Next.js
        alt="Background image"
        className="object-cover absolute inset-0 w-full h-full"  // Full width and height
      />
      <div className="flex relative z-10 flex-col p-10 -mb-32 max-w-full bg-white rounded-3xl w-[620px] max-md:px-5 max-md:mb-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e0be01b2cef941d65b159fe99f7f4a0009a8bff6e8bf0395adb53e39a181b0?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          alt="Quotation mark"
          className="object-contain w-10 aspect-[1.33] fill-blue-400"
        />
        <div className="flex flex-col mt-7 w-full max-w-[540px] max-md:max-w-full">
          <blockquote className="text-2xl font-semibold leading-8 text-zinc-800 max-md:max-w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </blockquote>
          <div className="flex flex-wrap gap-10 items-center mt-6 max-md:max-w-full">
            <cite className="self-stretch my-auto text-base opacity-75 text-zinc-800 not-italic">
              Dyna Lopez / CEO Revenue
            </cite>
            <div className="flex gap-4 items-start self-stretch my-auto">
              <div className="flex shrink-0 w-2 h-2 rounded-full border border-blue-400 border-solid stroke-[1px] stroke-blue-400" />
              <div className="flex shrink-0 w-2 h-2 rounded-full border border-blue-400 border-solid stroke-[1px] stroke-blue-400" />
              <div className="flex shrink-0 w-2 h-2 bg-blue-400 rounded-full border border-blue-400 border-solid fill-blue-400 stroke-[1px] stroke-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
