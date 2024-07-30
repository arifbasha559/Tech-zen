/* eslint-disable react/prop-types */
import { useState } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
  const [colors, setColors] = useState({
    color: "text-black",
    border: 'border-black',
    bg: 'bg-white'

  });
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    if (theme) {
      
      setColors({
        color: "text-white",
        border: 'border-white/50',
        bg: 'bg-[#021526]'
      })
      setTheme(!theme);
    } else {
      setColors({
        color: "text-black",
        border: 'border-black/50',
        bg: 'bg-white'
      })
      
      setTheme(!theme);
    }
  };

  return (
    <BlogContext.Provider value={{ toggleTheme, theme, colors }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
