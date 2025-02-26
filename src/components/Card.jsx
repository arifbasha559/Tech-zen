import PropTypes from "prop-types";
import BlogContext from "../context/BlogContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Card = (props) => {
  const blog = useContext(BlogContext);
  //    console.log(props.category);
  const tag = props.category;
  return (
    <div
      className={`card w-full max-w-sm min-h-[250px] px-6 py-3 ${
        blog.colors.bg !== "bg-black"
          ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
          : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
      } border-2 border-transparent rounded-xl flex flex-col cursor-pointer transform transition-transform duration-300 ease-in-out sm:hover:scale-105`}
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
        <p className="heading text-base font-semibold mt-4 mb-4">
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
        <p className="description my-3 text-sm font-semibold text-gray-500">
          {props.description.split(" ").slice(0, 20).join(" ")}.....
        </p>
      </div>
      <div className="footer mb-3 w-full flex items-center justify-between">
        <Link
          to={props.link}
          className={`w-fit px-3 py-1  rounded-lg ${
            blog.colors.bg == "bg-black"
              ? "bg-white text-black"
              : "bg-black text-white"
          }  ${
            blog.theme ? "hover:bg-white/70" : "hover:bg-black/70"
          } text-center`}
        >
          read more
        </Link>
        <div className={`img p-1 rounded-full bg-[#e81cff] from-[#ff1b6b] to-[#45caff] `}>
          <img className="w-16 h-16 rounded-full shadow-2xl"
            src={props.author.profile_image}
            alt="Card image"
          />
        </div>
      </div>

      <div className="footer text-sm font-semibold text-gray-500">
        By {props.author.name}
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
  author: PropTypes.string,
};


export default Card;
