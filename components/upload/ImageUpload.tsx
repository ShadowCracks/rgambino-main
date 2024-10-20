
import React from "react";

const ImageUpload: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-2xl font-medium leading-loose text-zinc-800">
        Images & Videos
      </h2>
      <div className="overflow-hidden px-3 pt-3 pb-44 mt-6 bg-white border-gray-300 border-solid shadow-sm border-[0.91px] max-md:pb-24 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-11 pt-28 pb-16 text-sm font-light leading-6 text-black border border-solid border-zinc-300 max-md:px-5 max-md:pt-24 max-md:mt-7">
              <p className="opacity-30">Upload a Image</p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto bg-zinc-300 h-[189px] w-[189px] max-md:mt-7" />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto bg-zinc-300 h-[188px] w-[188px] max-md:mt-7" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-5 text-black max-md:max-w-full">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>
    </section>
  );
};

export default ImageUpload;
