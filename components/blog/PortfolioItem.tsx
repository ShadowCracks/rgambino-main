import React from 'react';
import Link from 'next/link';

interface PortfolioItemProps {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  image,
  category,
  title,
  description,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="flex flex-col grow items-start text-blue-400 max-md:mt-25 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full h-60 rounded-md object-cover"
        />
        <div className="px-5 py-2 mt-3 text-xs leading-3 rounded-xl border border-blue-400 border-solid bg-blue-400 bg-opacity-30 max-md:pl-5">
          {category}
        </div>
        <h3 className="text-xl font-semibold leading-10 text-zinc-800">
          {title}
        </h3>
        <p className="text-base leading-6 opacity-50 text-zinc-800">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioItem;

