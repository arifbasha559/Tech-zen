/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import BlogContext from "../context/BlogContext";

const Create = ({ userData }) => {
  const { theme } = useContext(BlogContext);
  const blog = useContext(BlogContext);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
    tags: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleTagInput = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim().replace(",", "");
      if (newTag && !formData.tags.includes(newTag)) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }));
        setTagInput("");
      }
    }
  };

  const removeTag = (index) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ ...formData, username: userData.username }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create blog");
      }

      toast.success("Blog created successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      navigate("/blog");
    } catch (error) {
      toast.error(error.message || "Error creating blog post", {
        position: "bottom-right",
        autoClose: 5000,
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const date = (date) => {
    const rawDate = new Date(date);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[rawDate.getUTCDay()]; // Use UTC methods for consistency

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = months[rawDate.getUTCMonth()];

    const formattedrawDate = `${dayName}, ${rawDate.getUTCDate()} ${monthName} ${rawDate.getUTCFullYear()}`;
    return formattedrawDate;
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
    searchImages();
  }, []);
  return (
    <div className="grid grid-cols-10">
      <div
        className={`max-w-2xl mx-auto lg:col-span-5 col-span-full ${
          !preview ? "block" : "hidden"
        } w-4/5 p-4 md:p-6`}
      >
        <Helmet>
          <title>Tech-Zen | Create New Blog</title>
          <meta
            name="description"
            content="Create a new blog post on Tech-Zen"
          />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6 ">Create New Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium  mb-1">
              Title *
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border-2 rounded-md ${
                theme
                  ? "bg-blue-950/30 text-white placeholder-gray-400"
                  : "bg-blue-300/50 text-black placeholder-gray-600"
              } hover:border-blue-500 focus:border-blue-500 transition-colors border-transparent outline-none`}
              placeholder="Enter post title"
              required
              minLength={10}
              maxLength={100}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium  mb-1"
            >
              Description *
            </label>
            <input
              id="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-3 py-2 border-2 rounded-md ${
                theme
                  ? "bg-blue-950/30 text-white placeholder-gray-400"
                  : "bg-blue-300/50 text-black placeholder-gray-600"
              } hover:border-blue-500 focus:border-blue-500 transition-colors border-transparent text-wrap h-fit outline-none`}
              placeholder="Brief description of your post"
              required
              minLength={20}
              maxLength={200}
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium  mb-1"
            >
              Content *
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={handleChange}
              className={`w-full min-h-[200px] px-3 py-2 border-2 rounded-md ${
                theme
                  ? "bg-blue-950/30 text-white placeholder-gray-400"
                  : "bg-blue-300/50 text-black placeholder-gray-600"
              } hover:border-blue-500 focus:border-blue-500 transition-colors border-transparent  outline-none`}
              placeholder="Write your post content here..."
              required
              minLength={100}
            />
          </div>

          <div>
            <label htmlFor="tags" className="block peer text-sm font-medium  mb-1">Tags</label>
            <div
              className={`max-w-full px-3 py-2 border-2 flex rounded-md h-fit overflow-auto flex-wrap ${
                theme
                  ? "bg-blue-950/30 text-white placeholder-gray-400"
                  : "bg-blue-300/50 text-black placeholder-gray-600"
              } peer-hover:border-blue-500 peer-focus:border-blue-500 hover:border-blue-500 focus:border-blue-500 transition-colors border-transparent outline-none`}
            >
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-200"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="ml-1.5 inline-flex text-blue-600 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100"
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                id="tags"
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagInput}
                className={` outline-none  bg-transparent w-full inline  ${
                  theme
                    ? " text-white placeholder-gray-400"
                    : " text-black placeholder-gray-600 w-full"
                } pl-3`}
                placeholder="Type tags and press Enter or comma"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Add up to 5 tags to categorize your post
            </p>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="px-4 block lg:hidden py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              Preview
            </button>
            <button
              type="button"
              onClick={() => navigate("/blog")}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              disabled={
                isSubmitting ||
                !formData.title ||
                !formData.content ||
                !formData.tags ||
                !formData.description
              }
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Publishing...
                </>
              ) : (
                "Publish Post"
              )}
            </button>
          </div>
        </form>
      </div>
      <div
        className={`lg:col-span-5 w-full mx-auto ${
          preview ? "block" : "hidden"
        } col-span-full lg:block`}
      >
        <h2 className="text-4xl text-center m-auto py-4 underline text-blue-500 font-bruco">
          Preview
        </h2>
        <div
          className={`col-span-5  mx-auto w-4/5  overflow-auto py-10 px-5 rounded-lg  ${
            theme ? "bg-blue-950/50 text-white " : "bg-blue-300/50 text-black "
          }`}
        >
          <h1 className="text-3xl flex justify-between font-bold mb-4">
            {formData.title ? formData.title : "Enter the Title"}
          <div className="flex text-base justify-end ">
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="px-4 block lg:hidden py-2 bg-blue-600 text-white rounded-md font-normal hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Edit
          </button>
        </div>
          </h1>
          
          <p className="text-blue-600 mb-4">
            {date(Date.now())} by{" "}
            <Link
              to={`/profile/${userData?.username}`}
              className="hover:underline font-semibold"
            >
              {userData?.username}
            </Link>
          </p>
          <img
            src={data[1]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <div className="text-gray-500/80">
            {formData.description
              ? formData.description
              : "Enter the Description"}
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Tags</h2>

            <div className="flex  flex-col justify-between mt-auto">
              <div className="flex space-x-2">
                {formData.tags?.map((t, index) => {
                  const colorMap = [
                    "bg-red-100 text-red-800",
                    "bg-blue-100 text-blue-800",
                    "bg-green-100 text-green-800",
                    "bg-yellow-100 text-yellow-800",
                    "bg-purple-100 text-purple-800",
                    "bg-pink-100 text-pink-800",
                  ];
                  return (
                    <span
                      key={index}
                      className={`${
                        colorMap[Math.floor(Math.random() * 6)]
                      } font-medium px-2 py-1 rounded-full text-sm`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">In Detail</h2>
            <div className="flex flex-col gap-4 ">
              <p className={`${blog.colors.color}/70 `}>
                {formData.content ? formData.content : "Enter the Content"}
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Create;
