import React, { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { supabase } from "../../lib/supabaseclient"; // Ensure the Supabase client is imported

interface PortfolioData {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

const PortfolioSection: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch portfolio data from Supabase
  const fetchPortfolioData = async () => {
    try {
      const { data, error } = await supabase
        .from("post") // Your table name
        .select("id, title, description, image_url, created_at");

      if (error) throw error;

      // Format the data to match the expected structure
      const formattedData = data.map((item: any) => ({
        id: item.id,
        thumbnail: item.image_url, // Assuming `image_url` is the column storing the image URL
        title: item.title,
        description: item.description,
        date: new Date(item.created_at).toLocaleDateString(),
        type: "Images", // Adjust this based on your data
      }));

      setPortfolioData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      setError("Failed to load portfolio data.");
      setLoading(false);
    }
  };

  // Delete portfolio item
  const deletePortfolioItem = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("post")
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Update the portfolioData state after deletion
      setPortfolioData((prevData) => prevData.filter((item) => item.id !== id));
      alert("Post deleted successfully.");
    } catch (error) {
      console.error("Error deleting portfolio item:", error);
      alert("Failed to delete post.");
    }
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <section className="flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <h2 className="my-auto text-4xl font-semibold leading-none text-zinc-800">
          Portfolio
        </h2>
        <div className="flex flex-wrap gap-4 text-base font-medium text-center">
          <div className="flex gap-1.5 my-auto text-gray-500">
            <div className="grow">Most viewed</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5a00058648a6fdfc5de60f9b20a98b2b163667cd3c0b35b4a323a9bc317ceb?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
              alt=""
              className="object-contain shrink-0 my-auto w-1.5 aspect-[1.5]"
            />
          </div>
          <div className="flex flex-auto gap-5 max-md:max-w-full">
            <button className="px-7 py-3 text-gray-500 whitespace-nowrap border border-gray-500 border-solid rounded-[136px] max-md:px-5">
              Search
            </button>
            <button className="px-11 py-3 text-white capitalize bg-blue-400 rounded-[136px] max-md:px-5">
              Upload portfolio +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-12 mt-16 w-full text-black rounded-xl border border-black border-solid max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-1.5 pr-20 pl-3.5 w-full text-xl leading-10 text-center whitespace-nowrap rounded-xl bg-zinc-300 text-zinc-400 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-10 max-md:max-w-full">
            <div>Sr.No</div>
            <div>Thumbnail</div>
            <div>Description</div>
          </div>
          <div className="flex gap-10">
            <div>Date</div>
            <div>Type</div>
          </div>
        </div>

        {/* Loading/ Error State */}
        {loading && <p>Loading portfolio data...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* Portfolio Data */}
        {!loading && portfolioData.length > 0 ? (
          portfolioData.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between py-2">
              <PortfolioItem {...item} />
              <button
                onClick={() => deletePortfolioItem(item.id)}
                className="px-4 py-2 text-white bg-red-500 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="mt-4 text-center">No portfolio items found.</p>
        )}
      </div>
      <p className="self-start mt-6 text-sm text-black max-md:max-w-full">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>
    </section>
  );
};

export default PortfolioSection;
