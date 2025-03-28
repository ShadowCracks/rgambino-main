import React, { useEffect, useState } from "react";
import PortfolioGrid from "./PortfolioGrid";
import { supabase } from "../../lib/supabaseclient"; // Adjust based on where you initialize Supabase

interface PortfolioItem {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const { data, error } = await supabase
          .from("post") // Check if the table name is 'post'
          .select("id, title, image_url"); // Ensure column names match

        if (error) throw error;

        const formattedData = data.map((item: any) => ({
          id: item.id,
          image: item.image_url, // Adjust according to the column for the image
          category: item.category,
          title: item.title,
          description: item.description,
        }));

        setPortfolioItems(formattedData);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching portfolio items:", error.message);
        setError(`Error: ${error.message}`);
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  const handleFilterClick = (label: string) => {
    setActiveFilter(label);
  };

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="relative flex justify-center items-center w-full bg-gray-100 max-md:mt-0">
      <PortfolioGrid items={filteredItems} />
    </section>

  );
};

export default Portfolio;
