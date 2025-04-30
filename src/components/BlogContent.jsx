/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import { format } from "date-fns";
import BlogContext from "../context/BlogContext";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BlogContent = ({ posts: post, onClose, userData }) => {
  const blog = useContext(BlogContext);
  const contentRef = useRef(null);

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleDelete = () => {
    // Add delete logic here
    console.log("Post deleted");
  };
 

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
       <Helmet>
                  <title>
                    {post.title.substring(0, 15)} | Tech-Zen
                  </title>
                  <meta
                    name="description"
                    content={post.content.substring(0, 160)}
                  />
                  <meta property="og:title" content={post.title} />
                  <meta property="og:description" content={post.description} />
                  <meta property="og:type" content="article" />
                  <link
                    rel="canonical"
                    href={`https://tech-zen.vercel.app/posts/${post}`}
                  />
                </Helmet>
      <div
        ref={contentRef}
        className={`relative w-full max-w-4xl transition-all duration-200 scale-95 hover:scale-100 transform ${
          blog.colors.bg !== "bg-black"
            ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
            : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
        } ${
          blog.colors.color
        } rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">Tech Blog Post</h1>

        <article className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex justify-start gap-2 items-center">
              {post.tag_list &&
                post.tag_list.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#e81cff] px-3 py-1 font-semibold text-xs uppercase rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <time dateTime={post.published_timestamp} className="text-sm">
              {format(new Date(post.published_timestamp), "MMM d, yyyy")}
            </time>
          </div>

          <p className="heading text-lg font-bold mt-4 mb-4" title={post.title}>
            {post.title}
          </p>

          <p
            className="description my-3 text-sm font-semibold text-gray-500 italic"
            title={post.description}
          >
            {post.description}
          </p>
          <div
            className={`prose dark:prose-invert max-w-none text-gray-600 mb-6 ${blog.colors.color}`}
          >
            {post.content}
          </div>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Author:{" "}
            <Link
              to={`/profile/${post.author.username}`}
              className="flex items-center underline underline-offset-2 hover:text-blue-500 gap-2"
            >
              By {post.author.name}
            </Link>
          </div>

          {post.author.username ==
            (userData == null ? null : userData.username) && (
            <button
              onClick={handleDelete}
              className="mt-4  text-red-600 hover:text-red-500"
            >
            
              Delete Post
            </button>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogContent;
