
import React from "react";

interface PortfolioItemProps {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  thumbnail,
  title,
  description,
  date,
  type,
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between items-center mt-9 mr-8 ml-9 w-full max-w-[1212px] max-md:mr-2.5 max-md:max-w-full">
        <div className="self-stretch my-auto text-xl leading-10 text-center text-zinc-800">
          {id}
        </div>
        <img
          loading="lazy"
          src={thumbnail}
          alt={`Portfolio item ${id}`}
          className="object-contain shrink-0 self-stretch max-w-full rounded-md aspect-[1.67] w-[219px]"
        />
        <div className="flex flex-col self-stretch my-auto">
          <h3 className="self-start text-base font-bold leading-none">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-5">{description}</p>
        </div>
        <div className="self-stretch my-auto text-sm">{date}</div>
        <div className="self-stretch my-auto text-sm">{type}</div>
        
      </div>
      <div className="shrink-0 mt-9 h-px border border-black border-solid max-md:max-w-full" />
    </>
  );
};

export default PortfolioItem;
