import { useContext, useEffect, useState } from "react";
import "../App.css";
import BlogContext from "../context/BlogContext";
import { Link } from "react-router-dom";

const Home = () => {
  const blog = useContext(BlogContext);

  // Dummy data for cards
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [currentDate, setCurrentDate] = useState("");
  
  useEffect(() => {
    // Update the date and time every second
    const interval = setInterval(() => {
      const now = new Date();

      // Format the date
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Kolkata",
      }).format(now);

      

      setCurrentDate(formattedDate);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1
          className={`font-bruco w-full lg:text-8xl md:text-7xl text-5xl font-black lg:leading-snug border-b-2 mb-8 text-center ${blog.colors.border}`}
        >
          TECH ZEN
        </h1>

        {/* Card Grid */}
        <div className="flex w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto my-4">
            {data.map((_, index) => (
              <div
                key={index}
                className={`card w-full max-w-sm min-h-[350px] px-6 py-3 ${
                  blog.colors.bg !== "bg-black"
                    ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
                    : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
                } border-2 border-transparent rounded-xl flex flex-col cursor-pointer transform transition-all duration-300 ease-in-out hover:rotate-[5deg] hover:scale-105 hover:shadow-2xl`}
              >
                {/* Card Content */}
                <div className="main-content flex-1">
                  <div className="header flex justify-end text-xs font-semibold text-gray-500">
                    
                    <span>
                      <div>{currentDate}</div>
                    </span>
                  </div>
                  <p className="heading text-2xl font-bold mt-4 mb-4">
                    Different ways to use CSS in React
                  </p>
                  <div className="categories flex gap-2">
                    <span className="bg-[#e81cff] px-3 py-1 font-semibold text-xs uppercase rounded-full text-white">
                      React
                    </span>
                    <span className="bg-[#e81cff] px-3 py-1 font-semibold text-xs uppercase rounded-full text-white">
                      CSS
                    </span>
                  </div>
                  <p className="description my-6 text-sm font-semibold text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="footer my-3 w-full ">
                    <Link
                      to="/" // Add the link to the article page
                      className={`w-fit px-3 py-1.5  rounded-lg ${
                        blog.colors.bg == "bg-black"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }  ${
                        !blog.theme ? "hover:bg-white/70" : "hover:bg-black/70"
                      } text-center`}
                    >
                      read more
                    </Link>
                  </div>
                </div>
                <div className="footer text-sm font-semibold text-gray-500">
                  By Arif Basha
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
