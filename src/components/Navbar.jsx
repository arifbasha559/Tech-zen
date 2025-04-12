/* eslint-disable react/prop-types */
import "../App.css";
import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { TbWorldSearch } from "react-icons/tb";
import banner from "../assets/banner.png";
import { is } from "date-fns/locale";
const Navbar = ({ userData }) => {
  const blog = useContext(BlogContext);
  const location = useLocation();
  const borbg = blog.theme
    ? "after:bg-white before:bg-white"
    : "after:bg-black before:bg-black";
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`); // Navigate with query param
    }
  };

  const closeMenu = () => {
    setMenu(false);
    setNav("-translate-y-[200%]");
  };
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState("-translate-y-[200%]");
  const toggleMenu = () => {
    setMenu(!menu);
    if (menu == true) {
      setNav("-translate-y-[200%] ");
    } else {
      setNav("translate-0 ");
    }
  };

  // console.log(blog.border.color);
  return (
    <div
      className={`  ${blog.colors.bg} ${blog.colors.color} h-14   border-b px-5 lg:px-5 ${blog.colors.border}  flex items-center justify-between sticky top-0 left-10 z-50 mx-auto`}
    >
      <div className="logo ">
        <h2
          title="TECH ZEN"
          className=" text-xl font-bruco font-extrabold tracking-wide text-nowrap md:mr-16 lg:mr-0 "
        >
          TECH ZEN
        </h2>
      </div>
      <div
        className={`btn flex gap-2 lg:static absolute ${nav} text-sm font-medium -z-10 py-20 lg:py-0 h-fit lg:bg-transparent ${blog.colors.bg}  lg:translate-y-0 flex-col justify-center items-center  w-full lg:flex-row top-14 left-0  `}
      >
        <Link
          onClick={() => {
            closeMenu();
          }}
          to="/"
          className={`w-fit  ${
            location.pathname === "/" ||
            location.pathname === "/tools" ||
            location.pathname === "/tutorials"
              ? "activate"
              : ""
          }  nav-link ${borbg} px-2 ${blog.colors.color}  py-0.5   text-center`}
          title="Home"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            closeMenu();
          }}
          to="/about"
          className={`w-fit ${
            location.pathname === "/about" ? "activate" : ""
          } nav-link ${borbg} px-2 ${
            blog.colors.color
          } py-0.5 rounded-lg  text-center`}
          title="About"
        >
          About
        </Link>
        <Link
          onClick={() => {
            closeMenu();
          }}
          to="/blog"
          className={`w-fit ${
            location.pathname === "/blog" ? "activate" : ""
          } nav-link ${borbg} px-2 ${
            blog.colors.color
          } py-0.5 rounded-lg  text-center`}
          title="Blog"
        >
          Blog
        </Link>
        {!localStorage.getItem("token") && (
          <Link
            onClick={() => {
              closeMenu();
            }}
            to="/auth"
            className={`w-fit ${
              location.pathname === "/auth" ? "activate" : ""
            } nav-link ${borbg} px-2 ${
              blog.colors.color
            } py-0.5 rounded-lg  text-center`}
            title="Sign In"
          >
            Sign In
          </Link>
        )}
        {/* mobile screen search button  */}
        <div className="flex justify-center items-center md:hidden">
          <form
            onSubmit={handleSubmit}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${
              blog.theme ? "bg-white/20" : "bg-black/20"
            }  px-2 py-2  items-center w-4/5 justify-between  flex rounded-lg gap-5 outline-none `}
          >
            <input
              type="text"
              name="search"
              placeholder="Search Anything..."
              title="Search Anything..."
              autoComplete="off"
              className={`bg-transparent w-full  ${
                !blog.theme ? "placeholder-gray-500" : "placeholder-black/40 "
              } mr-auto placeholder:text-sm   w-32 text-sm px-0.5 rounded-lg outline-none`}
              id="search"
            />
            <button type="reset">
              <RxCross2 />
            </button>
            <button
              type="submit"
              onClick={() => {
                closeMenu();
              }}
            >
              <IconContext.Provider
                value={{ className: `${blog.colors.color}` }}
              >
                <TbWorldSearch />
              </IconContext.Provider>
            </button>
          </form>
        </div>
        {/* big screen theme changable buttton  */}
        <button
          onClick={() => {
            blog.toggleTheme(), closeMenu();
          }}
          className="size-8 rounded-lg p-1 hover:text-white flex "
        >
          <svg
            className={`fill-violet-700 ${blog.theme ? "block" : "hidden"} `}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className={`fill-yellow-500 ${blog.theme ? "hidden" : "block"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* big screen search button  */}
      <div className="search pl-3 py-1 min-w-[133px] flex gap-2 justify-end items-center  ">
        <div
          className={` inline-block group`}
          onClick={() => setIsOpen(!isOpen)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Avatar / Trigger */}
          <button
          onClick={() => setIsOpen(!isOpen)}
            className={` items-center justify-center  w-8 h-8 lg:size-10 ${
              userData != null ? "flex" : "hidden"
            } `}
          >
            <img
              src={banner}
              alt="profile avatar"
              className=" rounded-full border-2 cursor-pointer z-10 border-purple-600  h-full"
            />
          </button>

          {/* Dropdown Card */}
          {userData && (
            <div
              className={`absolute top-4 right-2 w-72   rounded-2xl  transition-all duration-200 ${
                isOpen ? "block" : "hidden  group-hover:block hover:block"
              }`}
            >
              <div
                className={` rounded-2xl mt-10 shadow-sm p-4 z-50 transition-all duration-200  ${
                  blog.colors.bg !== "bg-black"
                    ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] shadow-black text-gray-800"
                    : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-r overflow-hidden p-0.5 from-blue-600 to-purple-600">
                    <img src={banner} alt="" className="h-full rounded-lg" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-lg font-bold">{userData.name}</p>
                    <p className="text-sm text-gray-400">
                      @{userData.username}
                    </p>
                    <p className="text-sm text-gray-400">{userData.email}</p>
                  </div>
                </div>

                {userData.username && (
                  <Link
                    to={`/profile/${userData.username}`}
                    onClick={() => setIsOpen(!isOpen)}
                    className="mt-2 block w-fit mx-auto  px-3 py-1 text-sm rounded-lg border border-transparent hover:bg-gradient-to-r from-blue-600 to-purple-600 duration-300 transition"
                  >
                    View Profile
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* mobile screen theme changable buttton  */}
        <button
          onClick={() => {
            blog.toggleTheme(), closeMenu();
          }}
          className="size-8 rounded-lg p-1 z-10 lg:hidden hover:text-white  "
        >
          <svg
            className={`fill-violet-700 ${blog.theme ? "block" : "hidden"} `}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className={`fill-yellow-500 ${blog.theme ? "hidden" : "block"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={toggleMenu}
          className={`menu lg:hidden p-1.5 flex z-10 items-center rounded-full outline-none ${
            !blog.theme ? "bg-white/20" : "bg-black/20"
          } `}
        >
          <IconContext.Provider
            value={{ className: `text-lg ${blog.colors.color}` }}
          >
            <IoMenu />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
