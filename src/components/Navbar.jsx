import '../App.css'
import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { TbWorldSearch } from 'react-icons/tb';
const Navbar = () => {
  const blog = useContext(BlogContext);
  const [btn, setBtn] = useState(false)
  const [search, setSearch] = useState('invisible')
  const location = useLocation()
  const borbg = (blog.theme?'after:bg-white before:bg-white':"after:bg-black before:bg-black");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`); // Navigate with query param
    }
    
  };
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
      setNav('-translate-y-[200%] ')
    } else {
      setNav('translate-0 ')

    }
  }
  
  // console.log(blog.border.color);
  return (
    <div className={`   ${blog.colors.color} h-14 mb-2 backdrop-blur-3xl border-b px-5 lg:px-0 ${blog.colors.border} ${blog.colors.bg}   flex items-center justify-between sticky top-0 left-10 z-50 mx-auto`}>
      <div className="logo ">
        <h2 title="TECH ZEN" className=" text-xl font-bruco font-extrabold tracking-wide text-nowrap md:mr-16 " >TECH ZEN</h2>
      </div>
      <div className={`btn flex gap-2 lg:static absolute ${nav} text-sm font-medium -z-10 py-20 lg:py-0 h-fit ${blog.colors.bg}  lg:translate-y-0 flex-col justify-center items-center  w-full lg:flex-row top-14 left-0  `}>
        <Link onClick={() => { closeMenu() }} to="/" className={`w-fit lg:ml-10 ml-0 ${location.pathname==='/' ||location.pathname==='/tools' || location.pathname==='/tutorials' ?"activate":"" }  nav-link ${borbg} px-2 ${blog.colors.color}  py-0.5   text-center`} title="Home" >Home</Link>
        <Link onClick={() => { closeMenu() }} to="/blog" className={`w-fit ${location.pathname==='/blog'?"activate":"" } nav-link ${borbg} px-2 ${blog.colors.color} py-0.5 rounded-lg  text-center`} title="Blog" >Blog</Link>
        <Link onClick={() => { closeMenu() }} to="/news" className={`w-fit ${location.pathname==='/news'?"activate":"" } nav-link ${borbg} px-2 ${blog.colors.color} py-0.5 rounded-lg  text-center`} title="Blog" >News</Link>
        <Link onClick={() => { closeMenu() }} to="/about" className={`w-fit ${location.pathname==='/about'?"activate":"" } nav-link ${borbg} px-2 ${blog.colors.color} py-0.5 rounded-lg  text-center`} title="About" >About</Link>
        <Link onClick={() => { closeMenu() }} to="/contact" className={`w-fit ${location.pathname==='/contact'?"activate":"" } nav-link ${borbg} px-2 ${blog.colors.color} py-0.5 rounded-lg  text-center`} title="Contact" >Contact</Link>
        
        {/* mobile screen search button  */}
        <div className="flex justify-center items-center md:hidden">

          <form onSubmit={handleSubmit} value={query}
        onChange={(e) => setQuery(e.target.value)} className={`${(blog.theme) ? 'bg-white/20' : 'bg-black/20'}  px-2 py-2  items-center w-4/5 justify-between  flex rounded-lg gap-5 outline-none `}>
            <input type="text" name="search" placeholder="Search Anything..."  title="Search Anything..." autoComplete='off' className={`bg-transparent w-full  ${(!blog.theme) ? 'placeholder-gray-500' : 'placeholder-black/40 '} mr-auto placeholder:text-sm   w-32 text-sm px-0.5 rounded-lg outline-none`} id="search" />
            <button type="reset"  >
              <RxCross2 />
            </button>
            <button type="submit" onClick={() => { closeMenu() }} >
            <IconContext.Provider value={{ className: `${blog.colors.color}` }}>
            <TbWorldSearch />
          </IconContext.Provider>
            </button>
          </form>
        </div>
        {/* big screen theme changable buttton  */}
        <button onClick={() => { blog.toggleTheme(), closeMenu() }}
          className="size-8 rounded-lg p-1 hover:text-white  hidden lg:flex ">
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
      {/* big screen search button  */}
      <div className="search pl-3 py-1 flex gap-2 justify-between items-center  ">
        <form onSubmit={handleSubmit} value={query}
        onChange={(e) => setQuery(e.target.value)} className={`${(blog.theme) ? 'bg-white/20' : 'bg-black/20'}  px-2 py-1 hidden md:flex items-center rounded-lg outline-none gap-2 ${search}  `}>
          <input type="text" name="search" placeholder="Search Anything..." title="Search Anything..." autoComplete='off' className={`bg-transparent ${(blog.theme) ? 'placeholder-gray-500 ' : 'placeholder-black/40 '} placeholder:text-sm  w-5/6 text-sm px-0.5  rounded-lg outline-none`} id="search" />
          <button type="reset"  >
            <RxCross2 />
          </button>
          <button type="submit"  >
          <IconContext.Provider value={{ className: `${blog.colors.color} text-sm` }}>
          <TbWorldSearch />
          </IconContext.Provider>
          </button>
        </form>
        <button type="Submit" onClick={() => { toggleSearch() }} className={`${(!blog.theme) ? 'bg-white/20' : 'bg-black/20'}  p-1.5 items-center rounded-full outline-none hidden md:flex`}>
          <IconContext.Provider value={{ className: `${blog.colors.color}` }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
        {/* mobile screen theme changable buttton  */}
        <button onClick={() => { blog.toggleTheme(), closeMenu() }}
          className="size-8 rounded-lg p-1  lg:hidden hover:text-white  ">
          <svg className={`fill-violet-700 ${(blog.theme) ? 'block' : 'hidden'} `} fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg className={`fill-yellow-500 ${(blog.theme) ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </button>
        <button onClick={toggleMenu} className={`menu lg:hidden p-1.5 flex  items-center rounded-full outline-none ${(!blog.theme) ? 'bg-white/20' : 'bg-black/20'} `}>
          <IconContext.Provider value={{ className: `text-lg ${blog.colors.color}` }}>
            <IoMenu />
          </IconContext.Provider>

        </button>
      </div>
    </div>
  );
};

export default Navbar;

