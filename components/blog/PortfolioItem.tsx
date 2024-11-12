import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface PortfolioItemProps {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  date?: string;
  readTime?: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  image,
  category,
  title,
  description,
  date = 'Recent',
  readTime = 5,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container with Overlay */}
        <div className="relative overflow-hidden h-60">
          <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-4 py-2 text-sm font-medium text-blue-400 bg-white/95 rounded-full shadow-sm backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col p-6 flex-grow">
          {/* Metadata Row */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              {date}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" />
              {readTime} min read
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-zinc-800 mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base text-zinc-600 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Read More Link */}
          <div className="mt-auto flex items-center text-blue-400 font-medium">
            Read More
            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative Corner Effect */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/10 to-transparent" />
      </div>
    </Link>
  );
};

export default PortfolioItem;