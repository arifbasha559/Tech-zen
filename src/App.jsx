import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "./context/BlogContext";
import NotFound from "./components/NotFound";
import "./App.css";
import Blog from "./components/Blog";
import News from "./components/News";
import Tools from "./components/Tools";
import Tutorial from "./components/Tutorial";
function App() {
  const blog = useContext(BlogContext);
  // Returning the JSX code

  return (
    <div
      className={`${blog.colors.bg} ${blog.colors.color} lg:px-10  min-h-screen min-w-56`}
    >
      <Router>
        <div className="w-full">
          {/* Rendering the Navbar component */}
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="news" element={<News />} />
            <Route path="tools" element={<Tools />} />
            <Route path="tutorials" element={<Tutorial />} />
            <Route path="contact" element={<Contact />} />
             <Route path="*" element={<NotFound />} /> {/* 404 route */}
          
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// Exporting App as the default export
export default App;

