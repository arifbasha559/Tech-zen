import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import BlogContext from "../context/BlogContext";
const Navbar = () => {
  const blog = useContext(BlogContext);
  const [btn, setBtn] = useState(false)
  const [search, setSearch] = useState('invisible')
  const toggleSearch = () => {
    setBtn(!btn)
    if (btn == true) {
      setSearch('invisible')
    } else {
      setSearch('visible')

    }
  }
  const closeMenu = () => {
    setMenu(false);
    setNav('-translate-y-[200%]');
  };
  const [menu, setMenu] = useState(false)
  const [nav, setNav] = useState('-translate-y-[200%]')
  const toggleMenu = () => {
    setMenu(!menu)
    if (menu == true) {
      setNav('-translate-y-[200%]')
    } else {
      setNav('translate-0')

    }
  }
  // console.log(blog.border.color);
  return (
    <div className={`w-screen ${blog.colors.color} h-14  border-b px-5 ${blog.colors.border}  flex items-center justify-between fixed top-0 left-0 z-50 mx-auto`}>
      <div className="logo ">
        <h2 className=" text-lg font-bruco font-bold text-nowrap md:mr-16 ">TECH ZEN</h2>
      </div>
      <div className={`btn flex gap-2 md:static absolute ${nav}  md:translate-y-0 flex-col justify-center items-center backdrop-blur-sm w-screen md:flex-row top-14 left-0  `}>
        <Link onClick={() => { closeMenu() }} to="/" className="w-fit px-3  py-1 rounded-lg  text-center" >Home</Link>
        <Link onClick={() => { closeMenu() }} to="/about" className="w-fit px-3 py-1 rounded-lg  text-center" >About</Link>
        <Link onClick={() => { closeMenu() }} to="/contact" className="w-fit px-3 py-1 rounded-lg  text-center" >Contact</Link>
        <Link onClick={() => { closeMenu() }} to="/login" className={`w-fit px-3 py-1 rounded-lg ${(blog.colors.bg == 'bg-black') ? "bg-white text-black" : "bg-black text-white "}  ${(!blog.theme) ? 'hover:bg-white/70' : 'hover:bg-black/70'} text-center`} >login</Link>
        <Link onClick={() => { closeMenu() }} to="/register" className={`w-fit px-3 py-1 rounded-lg ${(blog.colors.bg == 'bg-black') ? "bg-white text-black" : "bg-black text-white "} ${(!blog.theme) ? 'hover:bg-white/70' : 'hover:bg-black/70'} text-center`} >Register</Link>
        <form className={`${(!blog.theme) ? 'bg-white/20' : 'bg-black/20'}  px-1 py-1  items-center w-4/5 justify-between flex sm:hidden  rounded-lg outline-none `}>
          <input type="text" name="search" placeholder="Search Anything..." className={`bg-transparent w-full  ${(!blog.theme) ? 'placeholder-gray-500' : 'placeholder-black/40'} mr-auto placeholder:text-sm  w-32 text-sm px-0.5 rounded-lg outline-none`} id="search" />
          <button type="reset">
            <RxCross2 />
          </button>
        </form>
        <button onClick={() => { blog.toggleTheme(), closeMenu() }}
          className="size-8 rounded-lg p-1 hover:text-white hover:border-white/50 border hidden sm:flex border-transparent transition-all duration-300">
          <svg className={`fill-violet-700 ${(blog.theme) ? 'block' : 'hidden'} `} fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg className={`fill-yellow-500 ${(blog.theme) ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </button>

      </div>
      <div className="search pl-3 py-1 flex gap-2 justify-between items-center  ">
        <form className={`${(!blog.theme) ? 'bg-white/20' : 'bg-black/20'}  px-1 py-1 hidden sm:flex items-center rounded-lg outline-none ${search} `}>
          <input type="text" name="search" placeholder="Search Anything..." className={`bg-transparent ${(!blog.theme) ? 'placeholder-gray-500' : 'placeholder-black/40'} placeholder:text-sm  w-32 text-sm px-0.5 rounded-lg outline-none`} id="search" />
          <button type="reset">
            <RxCross2 />
          </button>
        </form>

        <button type="button" onClick={() => { toggleSearch() }} className={`${(!blog.theme) ? 'bg-white/20' : 'bg-black/20'}  p-1.5 items-center rounded-full outline-none hidden sm:flex`}>
          <IconContext.Provider value={{ className: `${blog.colors.color}` }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
        <button onClick={() => { blog.toggleTheme(), closeMenu() }}
          className="size-8 rounded-lg p-1 sm:hidden hover:text-white hover:border-white/50 border border-transparent transition-all duration-300">
          <svg className={`fill-violet-700 ${(blog.theme) ? 'block' : 'hidden'} `} fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg className={`fill-yellow-500 ${(blog.theme) ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </button>
        <button onClick={toggleMenu} className={`menu md:hidden bg-white/20 p-1.5 flex  items-center rounded-full outline-none ${(!blog.theme) ? 'bg-white/20' : 'bg-black/20'} `}>
          <IconContext.Provider value={{ className: `text-lg ${blog.colors.color}` }}>
            <IoMenu />
          </IconContext.Provider>

        </button>
      </div>
    </div>
  );
};

export default Navbar;