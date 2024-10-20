
import React from "react";

type Review = {
  name: string;
  title: string;
  content: string;
  rating: number;
};

type ReviewSectionProps = {
  reviews: Review[];
};

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <section className="mt-7">
      <h3 className="text-xl font-semibold leading-10 text-zinc-800">
        Reviews 
      </h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <div className="flex gap-2.5 mt-3.5 text-base text-zinc-800">
            <div className="flex shrink-0 rounded-full bg-zinc-300 h-[33px] w-[33px]" />
            <div className="my-auto basis-auto">
              {review.name} / {review.title}
            </div>
          </div>
          <p className="mt-2.5 text-sm leading-6 text-zinc-500 w-[620px] max-md:max-w-full">
            "{review.content}"
          </p>
          <div className="flex gap-2.5 mt-4 text-sm leading-loose whitespace-nowrap text-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81957caa3886fc23e5623af64a945a958a393419053ce1f777d8d35688ef59c3?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
              alt={`${review.rating} out of 5 stars`}
              className="object-contain shrink-0 my-auto max-w-full rounded-sm aspect-[6.13] w-[104px]"
            />
            <div>{review.rating}/5</div>
          </div>
          {index < reviews.length - 1 && (
            <div className="shrink-0 mt-7 max-w-full h-px border border-black border-solid w-[730px]" />
          )}
        </div>
      ))}
      <button className="mt-5 text-sm leading-loose text-blue-400">
        Show all
      </button>
      <form className="flex flex-col justify-center items-start px-5 py-3 mt-7 max-w-full text-sm font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px] w-[730px]">
        <label htmlFor="reviewInput" className="sr-only">
          Add a Review
        </label>
        <input
          id="reviewInput"
          type="text"
          placeholder="Add a Review"
          className="w-full bg-transparent border-none outline-none opacity-30"
        />
      </form>
    </section>
  );
};

export default ReviewSection;
