import { useContext } from "react";
import "../App.css";
import BlogContext from "../context/BlogContext";
const Loader = () => {
  const blog = useContext(BlogContext);
  const colors = blog.colors.bg == "bg-black" ? "bg-white" : "bg-black";

  return (
    
    <div className="loader">
      <div className={`square ${colors}`} id="sq1"></div>
      <div className={`square ${colors}`} id="sq2"></div>
      <div className={`square ${colors}`} id="sq3"></div>
      <div className={`square ${colors}`} id="sq4"></div>
      <div className={`square ${colors}`} id="sq5"></div>
      <div className={`square ${colors}`} id="sq6"></div>
      <div className={`square ${colors}`} id="sq7"></div>
      <div className={`square ${colors}`} id="sq8"></div>
      <div className={`square ${colors}`} id="sq9"></div>
    </div>
  );
};

export default Loader;
