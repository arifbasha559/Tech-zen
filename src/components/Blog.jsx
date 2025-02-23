import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import BlogContext from "../context/BlogContext";
import Card from "./Card";
import Loader from "./Loader";

const Blog = () => {
  const location = useLocation();
  const blog = useContext(BlogContext);
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Example total pages
  const [loading, setLoading] = useState(true);

  const fetchStories = async (page) => {
    setLoading(true);
    try {
      const storyIdsResponse = await fetch(
        `https://dev.to/api/articles?page=${page}`
      );
      const response = await storyIdsResponse.json();
      setStories(response);
      setTotalPages(Math.ceil(response.length));
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
    setLoading(false);
  };

  useState(() => {
    fetchStories(1);
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      fetchStories(newPage);
    }
  };

  return (
    <>
      <div className={`w-full px-4 sm:px-6 lg:px-8 ${blog.theme}`}> {/* Apply theme */}
        <h1 className={`font-bruco w-full lg:text-8xl md:text-7xl text-5xl font-black lg:leading-snug border-b-2 mb-8 text-center ${blog.colors.border}`}>
          TECH ZEN
        </h1>

        <div className="flex w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto justify-center my-4">
            {loading ? (
              <Loader />
            ) : (
              stories.map((article, index) => {
                if (article?.language === "en") {
                  return (
                    <Card
                      key={index}
                      title={article?.title}
                      description={article?.description}
                      category={article?.tag_list}
                      date={article?.published_timestamp}
                      link={article?.url}
                      author={article?.user}
                    />
                  );
                } else {
                  return null;
                }
              })
            )}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 my-4">
          {page > 1 && (
            <button
              className="flex items-center px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
              onClick={() => handlePageChange(page - 1)}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              Previous
            </button>
          )}
          {page > 1 && <button className="px-3 py-2 rounded-lg bg-gray-800">{page - 1}</button>}
          <button className="px-3 py-2 rounded-lg bg-blue-600">{page}</button>
          {page + 1 <= totalPages && <button className="px-3 py-2 rounded-lg bg-gray-800" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>}
          {page + 2 <= totalPages && <button className="px-3 py-2 rounded-lg bg-gray-800" onClick={() => handlePageChange(page + 2)}>{page + 2}</button>}
          {page + 3 <= totalPages && <button className="px-3 py-2 rounded-lg bg-gray-800" onClick={() => handlePageChange(page + 3)}>{page + 3}</button>}
          {page < totalPages && (
            <>
              <button className="px-3 py-2 rounded-lg bg-gray-800" onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
              <button
                className="flex items-center px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
