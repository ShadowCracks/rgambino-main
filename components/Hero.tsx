import React from "react";
import CountUp from "react-countup";

const Hero: React.FC = () => {
  return (
    <section className="flex z-10 flex-col items-start pl-20 -mt-0 w-full max-md:pl-5 max-md:max-w-full">
      <div className="self-end w-full max-w-full max-md:max-w-full">
        <div className="flex gap-5 max-custom:flex-col max-custom:items-center">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full max-custom:items-center">
            <div className="flex z-10 flex-col mt-28 mr-0 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:mr-2 max-md:max-w-full max-custom:items-center">
                <div className="flex flex-col max-w-full w-[527px] max-custom:items-center">
                  <h1 className="text-7xl font-semibold tracking-tighter leading-[80px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] max-custom:text-center">
                    Ultimate Care <br /> for Your Car
                  </h1>
                  <p className="mt-4 text-xl leading-8 opacity-50 text-zinc-800 max-md:max-w-full max-custom:text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>

                <a
                  href="Booking"
                  className="self-start max-custom:self-center px-8 py-2.5 mt-8 text-base font-bold text-white bg-blue-400 rounded-[100px] max-md:px-5"
                >
                  Book Appointment
                </a>
              </div>
              <div className="flex flex-wrap gap-10 items-center mt-24 max-md:mt-10 max-custom:justify-center">
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl font-semibold tracking-tighter leading-none text-blue-400">
                    <CountUp end={8000} duration={3} suffix="+" />
                  </div>
                  <div className="mt-1 text-base text-zinc-800">
                    Satisfied Clients
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf4f2150138ce2215e9d5c2e53a40ac206eb33caa79c097b5531205fadaa120?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square fill-blue-400"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl font-semibold tracking-tighter leading-none text-blue-400">
                    <CountUp end={150} duration={3} suffix="+" />
                  </div>
                  <div className="mt-1 text-base text-zinc-800">Car Models</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf4f2150138ce2215e9d5c2e53a40ac206eb33caa79c097b5531205fadaa120?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square fill-blue-400"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl font-semibold tracking-tighter leading-none text-blue-400">
                    <CountUp end={98} duration={3} suffix="%" />
                  </div>
                  <div className="mt-1 text-base text-zinc-800">
                    Succession Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 md:ml-0 w-[61%] max-md:w-full max-custom:w-full max-custom:items-center">
          <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91eb3de9a593bd5c1de694e60a1834d441340d5e7a6f853a3073029f0797d587?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          alt="Car being cleaned"
          className="object-cover w-full max-custom:w-full max-md:max-w-full animate-slide-in"
        />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
