import { useContext } from "react";
import "../App.css";
import BlogContext from "../context/BlogContext";
import { Link } from "react-router-dom";
const Home = () => {
  const data = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  const blog = useContext(BlogContext);
  console.log(localStorage)
  return (
    <>
      <div className="w-full px-2 sm:px-0">
      <h1 className={`font-bruco w-full lg:text-8xl md:text-7xl text-6xl font-black lg:leading-snug border-b-2 mb-4 text-center ${blog.colors.border}`}>TECH ZEN</h1>

        <div className="flex  w-full" >
          <div className="grid gap-7 grid-cols-12 grid-rows-2 mx-auto  cards  my-2 ">


            {
              data.map((a, s) => {
                return (




                  <div key={s} className={` card hover:scale-105  h-auto overflow-hidden  ${(blog.colors.bg == 'bg-[#021526]') ? "shadow-3xl" : "shadow-4xl"} col-span-12 lg:col-span-3 rounded-lg  transition-all duration-500  ${(blog.colors.bg == 'bg-[#021526]') ? "bg-[#021526] text-white" : "bg-white text-black "}  `} >
                    <div className="  overflow-hidden">
                      <img className="object-cover object-center w-full h-full  hover:scale-125  transition-transform duration-300" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Card image" />
                    </div>
                    <div className="h-fit ">

                    <div className="px-2 py-2">
                      <div className={`font-bold ${blog.colors.color} text-base mb-1`}>Title</div>
                      <div className={`${(blog.colors.bg != 'bg-[#021526]') ? " text-black" : " text-white/50 "}`}>

                      <p className={` text-xs`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <p className={` text-xs mt-1`}>Author: John Doe</p>
                      </div>
                    </div>
                    <div className="px-2 py-2 mb-2">
                      <Link to="/" className={`w-fit px-3 py-2  rounded-lg ${(blog.colors.bg == 'bg-[#021526]') ? "bg-white text-black" : "bg-[#021526] text-white "}  ${(!blog.theme) ? 'hover:bg-white/70' : 'hover:bg-[#021526]/70'} text-center`} >read more</Link>
                    </div>
                    </div>
                  </div>



                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
