import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
  const [colors, setColors] = useState({
    color: "text-black",
    border: "border-black",
    bg: "bg-white",
  });
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? false
  );

  useEffect(() => {
    if (theme) {
      setColors({
        color: "text-white",
        border: "border-white/50",
        bg: "bg-black",
      });
    } else {
      setColors({
        color: "text-black",
        border: "border-black/50",
        bg: "bg-white",
      });
    }
  }, [theme]);

  const toggleTheme = () => {
    setColors({
      color: theme ? "text-black" : "text-white",
      border: theme ? "border-black/50" : "border-white/50",
      bg: theme ? "bg-white" : "bg-black",
    });
    setTheme(!theme);
    localStorage.setItem("theme", JSON.stringify(!theme));
  };

  return (
    <BlogContext.Provider value={{ toggleTheme, theme, colors }}>
      {props.children}
    </BlogContext.Provider>
  );
};

BlogState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogState;

