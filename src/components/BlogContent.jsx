/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import BlogContext from "../context/BlogContext";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "./Card";
import { use } from "react";

const BlogContent = () => {
  const { postId } = useParams();
  const blog = useContext(BlogContext);
  const [post, setPost] = useState([]);
  const [blogs, setBlogs] = useState([]);
  console.log(postId);
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
  const fetchPost = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/${postId}/`
      );
      const data = await response.json();

      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
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
  };
  const fetchStories = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/`
      );
      const data = await response.json();

      data.sort(
        (a, b) =>
          new Date(b.published_timestamp) - new Date(a.published_timestamp)
      );
      setBlogs(data);
    } catch (error) {
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
  useEffect(() => {
    fetchStories();
    fetchPost();
  }, [postId]);
  console.log(post);

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags} />
        <meta name="author" content={post.username} />
        <meta name="published_date" content={post.createdAt} />
        <meta name="modified_date" content={post.updatedAt} />
        <meta name="og:title" content={post.title} />
        <meta name="og:description" content={post.description} />
        <meta name="og:url" content={window.location.href} />
        <meta name="og:type" content="article" />
        <meta name="og:site_name" content="Tech Zen" />
        <meta name="og:locale" content="en_US" />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-7  gap-4  relative justify-center px-20">
        <div className="col-span-2  mx-auto  overflow-auto  h-[calc(100vh-56px)]  sticky top-14">
          <h4
            className={`px-5 text-lg font-bold sticky h-fit top-0 pt-10 pb-5 z-50 ${blog.colors.bg} ${blog.colors.text}`}
          >
            Recent Blog Posts
          </h4>
          <div className=" grid grid-cols-1 gap-4  px-2">
            {blogs.slice(0, 10).map((blog, index) => (
              <Card
                key={index}
                index={index}
                title={blog.title}
                content={blog.content}
                description={blog.description}
                category={blog.tag_list}
                date={blog.published_timestamp}
                author={blog.author}
                posts={blog}
                image={data[index]?.webformatURL}
                link={`/post/${blog._id}`}
              />
            ))}
          </div>
        </div>
        <div className="col-span-5  mx-auto w-4/5  overflow-auto py-20">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-blue-600 mb-4">
            {date(post.published_timestamp)} by{" "}
            <Link to={`/profile/${post.author?.username}`} className="hover:underline font-semibold">{post.author?.username}</Link >
          </p>
          <img
            src={data[post.tag_list?.length]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <div className="text-gray-500/80">{post.description}</div>
         
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Tags</h2>

            <div className="flex  flex-col justify-between mt-auto">
              <div className="flex space-x-2">
                {post.tag_list?.map((t, index) => {
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

            <p className={`${blog.colors.color}/70 `}>{post.content}</p>
            <img
            src={data[post.tag_list?.length]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
            <p className={`${blog.colors.color}/70 `}>{post.content}</p>
            <img
            src={data[post.tag_list?.length]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          /><p className={`${blog.colors.color}/70 `}>{post.content}</p>
            <img
            src={data[post.tag_list?.length]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          /><p className={`${blog.colors.color}/70 `}>{post.content}</p>
            <img
            src={data[post.tag_list?.length]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          /><p className={`${blog.colors.color}/70 `}>{post.content}</p>
            <img
            src={data[post.tag_list?.length]?.webformatURL}
            alt="Blog Post"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          /><p className={`${blog.colors.color}/70 `}>{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
