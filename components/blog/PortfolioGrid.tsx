import React from "react";
import PortfolioItem from "./PortfolioItem";

interface PortfolioItemProps {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface PortfolioGridProps {
  items: PortfolioItemProps[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PortfolioGrid;

