/* eslint-disable react/prop-types */
import { useContext, useState, useEffect, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import BlogContext from "../context/BlogContext";
import Card from "./Card";
import Loader from "./Loader";
import { TbWorldSearch } from "react-icons/tb";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

const Blog = () => {
  const blog = useContext(BlogContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sQuery, setSQuery] = useState("");
  const query = new URLSearchParams(location.search).get("search");

  const fetchStories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/`
      );
      const data = await response.json();

      data.sort(
        (a, b) =>
          new Date(b.published_timestamp) - new Date(a.published_timestamp)
      );

      setStories(data);
      setTotalPages(Math.ceil(data.length / 50));
    } catch (error) {
      setError("Failed to fetch blog. \n Please try again later.");
      console.error("Error fetching stories:", error);
      toast.error("Failed to fetch blog.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: !blog.theme ? "light" : "dark",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStories();
  }, [page, query]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sQuery.trim()) {
      setPage(1);
      navigate(`?search=${encodeURIComponent(sQuery)}`);
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const searchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=47897092-9c2f8cae15ca662cb2e33adf1&q=programming&per_page=200`
        );
        const data = await response.json();
        // console.log (data);
        setData(data.hits); // Set the state with the fetched data
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    searchImages();  }, [])
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 relative ${blog.theme}`}>
      <Helmet>
        <title>
          Blogs | Tech-Zen - A place to learn and grow
        </title>
      </Helmet>
      <h1
        className={`font-bruco w-full lg:text-8xl md:text-7xl text-5xl font-black lg:leading-snug border-b-2  text-center ${blog.colors.border}`}
      >
        TECH ZEN
        <div className="text-3xl md:py-5 relative flex justify-center flex-col gap-5 items-center">
          <span className="text-4xl">Blogs</span>
          <form
            onSubmit={handleSubmit}
            className={`md:absolute right-0 top-[50%] -translate-y-1/2 ${
              blog.theme ? "bg-white/20" : "bg-black/20"
            } px-2 py-1 flex font-sans font-normal items-center rounded-lg outline-none gap-2 w-fit h-fit`}
          >
            <input
              type="text"
              name="search"
              placeholder="Search Anything..."
              title="Search Anything..."
              autoComplete="off"
              value={sQuery}
              onChange={(e) => setSQuery(e.target.value)}
              className={`bg-transparent ${
                blog.theme ? "placeholder-gray-500" : "placeholder-black/40"
              } placeholder:text-sm w-5/6 text-sm px-0.5 rounded-lg outline-none`}
              id="search"
            />
            <button type="reset" onClick={() => setSQuery("")}>
              <RxCross2 className={`${blog.colors.color} text-base`} />
            </button>
            <button type="submit">
              <IconContext.Provider
                value={{ className: `${blog.colors.color} text-base` }}
              >
                <TbWorldSearch />
              </IconContext.Provider>
            </button>
          </form>
        </div>
      </h1>

      <div className="flex w-full">
        <div className="grid gap-6 grid-cols-12 md:grid-rows- md:auto-rows-auto mx-auto justify-between mb-4">
          {loading ? (
            <Loader />
          ) : error ? (
            <div key="1" className="text-red-500 text-center"></div>
          ) : (
            stories.map((article, index) => (
              <Fragment key={index}>
              
                {index === 0 && (
                  <h3
                    key={index}
                    className={`text-3xl h-full py-10  col-span-full self-center font-bold px-2 ${blog.colors.color}`}
                  >
                    Recent Blog Posts
                  </h3>
                )}
               <div className={`col-span-12 h-full  ${
  index === 0
    ? "md:col-span-6 md:row-span-2 "
    : index === 1
    ? "md:col-span-6 md:row-span-1 md:col-start-7 md:row-start-2"
    : index === 2
    ? "md:col-span-6 md:row-span-1 md:col-start-7 md:row-start-3"
    : index === 3
    ? "md:col-span-12 md:row-span-1 md:row-start-4 md:row-end-6"
    : index >= 4
    ? "md:col-span-4 md:row-span-"  // Apply to ALL 4+
    : ""
}`}>
                  <Card
                    key={index}
                    index={index}
                    title={article.title}
                    content={article.content}
                    description={article.description}
                    category={article.tag_list}
                    date={article.published_timestamp}
                    author={article.author}
                    posts={article}
                    image={data[index]?.webformatURL}
                    link={`/post/${article._id}`}     
                    location={location.pathname} 
                  />
                </div>
                {index === 2 && (
                  <h3
                    key={index}
                    className={`text-3xl self-center col-span-full row-span-1 py-10  h-full font-bold px-2 ${blog.colors.color} `}
                  >
                    All Blog Posts
                  </h3>
                )}
              </Fragment>
            ))
          )}
        </div>
      </div>
      

      {!loading && stories.length > 49 && (
        <div className="flex items-center justify-center space-x-2 py-20 max-w-[80vh] mx-auto">
          {page > 1 && (
            <button
              className={`flex items-center px-4 py-2 rounded-lg ${
                blog.colors.bg !== "bg-black"
                  ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                  : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
              }`}
              onClick={() => handlePageChange(page - 1)}
            >
              <svg
                className="w-4 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          )}
          {[...Array(totalPages).keys()]
            .slice(Math.max(0, page - 3), Math.min(totalPages, page + 2))
            .map((p) => (
              <button
                key={p + 1}
                className={`px-4 py-2 rounded-lg ${
                  p + 1 === page
                    ? "bg-blue-600 text-white"
                    : blog.colors.bg !== "bg-black"
                    ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                    : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
                }`}
                onClick={() => handlePageChange(p + 1)}
              >
                {p + 1}
              </button>
            ))}
          {page < totalPages && (
            <button
              className={`flex items-center px-4 py-2 rounded-lg ${
                blog.colors.bg !== "bg-black"
                  ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                  : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              <svg
                className="w-4 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          )}
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={!blog.theme ? "light" : "dark"}
      />
    </div>
  );
};

export default Blog;
