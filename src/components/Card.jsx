import PropTypes from "prop-types";
import BlogContext from "../context/BlogContext";
import { useContext } from "react";
import banner from "../assets/banner.png";
import "../App.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  const blog = useContext(BlogContext);
  const tag = props.category; 
  return (
    <div
      className={`card w-full max-w-sm min-h-[250px] px-6 py-3 z-10 ${
        blog.colors.bg !== "bg-black"
          ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
          : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
      } border-2 border-transparent rounded-xl flex flex-col cursor-default transform transition-transform duration-300 ease-in-out sm:hover:scale-105`}
    >
      {/* Card Content */}
      <div className="main-content flex-1">
        <div className="header flex justify-end text-xs font-semibold text-gray-500">
          <span>
            <div>
              {new Date(props.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </div>
          </span>
        </div>
        <p
          className="heading text-base font-semibold mt-4 mb-4"
          title={props.title}
        >
          {props.title.split(" ").slice(0, 8).join(" ")}....
        </p>
        <div className="categories flex gap-2 overflow-x-auto tag">
          {tag.map((tag, index) => {
            return [
              index <= 2 ? (
                <span
                  key={index}
                  className="bg-[#e81cff] px-3 py-1 font-semibold text-[.5rem] uppercase rounded-full text-white"
                >
                  {tag}
                </span>
              ) : (
                ""
              ),
            ];
          })}
        </div>
        <p
          className="description my-3 text-sm font-semibold text-gray-500"
          title={props.description}
        >
          {props.description.split(" ").slice(0, 10).join(" ")}.....
        </p>
      </div>
      <div className="footer mb-3 w-full flex items-center justify-between">
        <button
         onClick={props.onReadMore}
          className={`w-fit px-3 py-1  rounded-lg ${
            blog.colors.bg == "bg-black"
              ? "bg-white text-black"
              : "bg-black text-white"
          }  ${
            blog.theme ? "hover:bg-white/70" : "hover:bg-black/70"
          } text-center
          `}
        >
          read more
        </button>
        <div
          className={`img p-1 rounded-full  bg-[radial-gradient(circle,#e81cff,#6a00f4)] `}
        >
          <img
            className="w-16 h-16  rounded-full shadow-2xl  "
            src={banner}
            // alt={props.author.name}
          />
        </div>
      </div>

      <div className="footer text-xs font-semibold text-gray-500 hover:underline underline-offset-2">
        <Link to={`/profile/${props.author.username}`} className="flex items-center gap-2">
        By {props.author.name}
        </Link>
      </div>
      
    </div>
  );
};
Card.propTypes = {
  link: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.array,
  description: PropTypes.string,
  author: PropTypes.object,
};

export default Card;
