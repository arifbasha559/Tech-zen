import { useContext } from "react";
import "../App.css";
import BlogContext from "../context/BlogContext";
import { Link } from "react-router-dom";
const Home = () => {
  const blog = useContext(BlogContext);
  const data = [1,2,3,4,5]
  return (
    <>
    <div className="w-full flex justify-center">

    
    <div className="flex  flex-wrap gap-3  m-auto w-11/12 " >
      {
        data.map((a,s)=>{
return(

  
  

<a key={s}  className={` max-w-xs  overflow-hidden shadow-lg rounded-lg ${blog.theme?"border-2":"border-[0.1px]"} ${blog.colors.border} `} >
  <div className="aspect-w-4 aspect-h-3  overflow-hidden">
    <img className="object-cover object-center w-full h-full hover:scale-125  transition-transform duration-300" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Card image"/>
  </div>
  <div className="px-2 py-2">
    <div className={`font-bold ${blog.colors.color} text-base mb-1`}>Title</div>
    <p className={`text-gray-700 text-xs`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p className={`text-gray-700 text-xs mt-1`}>Author: John Doe</p>
  </div>
  <div className="px-2 py-2 mb-2">
  <Link  to="/" className={`w-fit px-3 py-2  rounded-lg ${(blog.colors.bg == 'bg-black') ? "bg-white text-black" : "bg-black text-white "}  ${(!blog.theme) ? 'hover:bg-white/70' : 'hover:bg-black/70'} text-center`} >read more</Link>
  </div>
</a>



        )})}
        </div>
        </div>
    </>
  )
}

export default Home