/* eslint-disable react/prop-types */
import BlogContext from "../context/BlogContext";
import { useContext } from "react";
import banner from "../assets/banner.png";
import "../App.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = (props) => {
  const blog = useContext(BlogContext);
  const tag = props.category;
  const date = () => {
    const rawDate = new Date(props.date);

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

  return (
    <>
      <Link
        to={props.link}
        className={`card-container  min-h-full text-left flex flex-col
               justify-between rounded-lg hover:shadow-lg transition-all duration-200 hover:shadow-purple-600`}
      >
        <div
          className={`flex ${
            props.location == "/blog" && props.index > 0 && props.index < 4
              ? "flex-row "
              : "flex-col"
          } justify-between h-full w-full cursor-pointer outline-none p-5 gap-6 items-center`}
        >
          <img
            // src={banner}
            src={props.image}
            alt="Blog Post"
            className={` aspect-[25/9] rounded-lg ${
              props.location == "/blog" &&
              (props.index === 0
                ? "w-full"
                : props.index > 0 && props.index < 4
                ? "h-full w-1/2 object-center object-cover aspect-[16/9]"
                : "h-2/3 w-full") // Apply to ALL 4+
            } `}
          />
          <div
            className={`flex flex-col justify-between 
            ${
              props.location == "/blog" &&
              (props.index === 0
                ? "w-full"
                : props.index > 0 && props.index < 4
                ? "h-full w-1/2 "
                : "h-2/5  w-full") // Apply to ALL 4+
            }`}
          >
            <span className="text-sm  text-left flex gap-5 px-2 text-blue-500">
              {date()}
              <Link
                to={`/profile/${props.author.username}`}>
                <span className="text-sm hover:underline text-blue-500 font-semibold">
                  {props.author.username}
                </span>
              </Link>            
              </span>
            <div className="title flex justify-between items-center mb-2">
              <h2
                className={`"text-xl font-bold text-left mb-2 ${blog.colors.color} "`}
              >
                {props.title.split(" ").slice(0, 5).join(" ")}....
              </h2>
              <FaArrowUp className="rotate-45 self-start" />
            </div>
            <p className="text-gray-400 mb-2 text-left">{props.description}</p>
            <div className="flex  flex-col justify-between mt-auto">
              <div className="flex space-x-2">
                {tag.map((t, index) => {
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
                      } font-medium px-2 py-1 rounded-full text-xs`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
