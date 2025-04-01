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
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Advertisement from "./components/Advertisement";
function App() {
  const blog = useContext(BlogContext);
  // Returning the JSX code

  return (
    <div
      className={`${blog.colors.bg} ${blog.colors.color}  min-h-screen min-w-56`}
    >
      <Router>
        <div className="w-full  ">
          {/* Rendering the Navbar component */}
          <Navbar />
          <Advertisement />
          <Routes>
            <Route index element={<Blog />} />
            <Route path="about" element={<div className="lg:px-10"><About /></div>} />
            <Route path="Blog" element={<div className="lg:px-10"><Blog /></div>} />
            <Route path="news" element={<div className="lg:px-10"><News /></div>} />
            <Route path="tools" element={<div className="lg:px-10"><Tools /></div>} />
            <Route path="tutorials" element={<div className="lg:px-10"><Tutorial /></div>} />
            <Route path="contact" element={<div className="lg:px-10"><Contact /></div>} />
            <Route path="terms" element={<div className="lg:px-10"><Terms /></div>} />
            <Route path="privacy" element={<div className="lg:px-10"><Privacy /></div>} />
             <Route path="*" element={<div className="lg:px-10"><NotFound /></div>} /> {/* 404 route */}
          
          </Routes>
        </div>
          {(location.pathname === "/" ||location.pathname == "/" )&& <Footer />}
      </Router>
    </div>
  );
}

// Exporting App as the default export
export default App;

