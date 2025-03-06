import { useContext, useState, useEffect } from "react";
import "../App.css";
import BlogContext from "../context/BlogContext";
import Card from "./Card";
import Loader from "./Loader";

const News = () => {
  const blog = useContext(BlogContext);

  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get the search query from the URL

  // Fetch Stories (Debounced)
  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dev.to/api/articles?page=${page}&per_page=50&tag=news`
        );
        const data = await response.json();

        // Sort by latest published date
        data.sort(
          (a, b) =>
            new Date(b.published_timestamp) - new Date(a.published_timestamp)
        );

        setStories(data);
        setTotalPages(Math.ceil(data.length)); 

      } catch (error) {
        console.error("Error fetching stories:", error);
      }
      setLoading(false);
    };

    // Debounce fetch to avoid excessive calls on rapid changes
    const debounceFetch = setTimeout(fetchStories, 300);

    return () => clearTimeout(debounceFetch); // Cleanup on unmount or state change
  }, [page]); // Refetch when `page` or `query` changes

  // Handle Page Change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 ${blog.theme}`}>
      {/* Header */}
      <h1
        className={`font-bruco w-full lg:text-8xl md:text-7xl text-5xl font-black lg:leading-snug border-b-2 mb-8 text-center ${blog.colors.border}`}
      >
        TECH ZEN<span className="flex justify-center items-center text-3xl py-5 "> News</span>
      </h1>

      {/* Blog Grid */}
      <div className="flex w-full">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto justify-center my-4">
          {loading ? (
            <Loader />
          ) : (
            stories
              .filter((article) => article.language === "en") // Only show English articles
              .map((article, index) => (
                <Card
                  key={index}
                  title={article.title}
                  description={article.description}
                  category={article.tag_list}
                  date={article.published_timestamp}
                  link={article.url}
                  author={article.user}
                />
              ))
          )}
        </div>
      </div>

      {/* Pagination */}
      {!loading && stories.length > 0 && (
          <div className="flex items-center justify-center space-x-2 py-20 max-w-[80vh] mx-auto">
            {page > 1 && (
              <button
                className={`flex items-center px-4 py-2 rounded-lg ${
                  blog.colors.bg !== "bg-black"
                    ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                    : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
                } `}
                onClick={() => handlePageChange(page - 1)}
              >
                <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )}
            {page > 1 && (
              <button className={`px-4 py-2 rounded-lg ${
                blog.colors.bg !== "bg-black"
                  ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                  : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
              }`}>
                {page - 1}
              </button>
            )}
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">{page}</button>
            {page + 1 <= totalPages && (
              <button className={`px-4 py-2 rounded-lg ${
                blog.colors.bg !== "bg-black"
                  ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                  : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
              }`} onClick={() => handlePageChange(page + 1)}>
                {page + 1}
              </button>
            )}
            {page + 2 <= totalPages && (
              <button className={`px-4 py-2 rounded-lg ${
                blog.colors.bg !== "bg-black"
                  ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                  : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
              }`} onClick={() => handlePageChange(page + 2)}>
                {page + 2}
              </button>
            )}
            
            {page < totalPages && (
              <>
                <button className={`px-4 py-2 rounded-lg ${
                  blog.colors.bg !== "bg-black"
                    ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                    : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
                }`} onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </button>
                <button className={`flex items-center px-4 py-2 rounded-lg ${
                  blog.colors.bg !== "bg-black"
                    ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                    : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
                }`} onClick={() => handlePageChange(page + 1)}>
                  <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            )}
          </div>
        )}
    </div>
  );
};

export default News;
