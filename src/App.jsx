import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react'
import BlogContext from './context/BlogContext'
function App() {
    
  const blog = useContext(BlogContext);
  // Returning the JSX code
  
 return (
   
   
    <div className={`${blog.colors.bg} ${blog.colors.color} lg:px-10 transition-colors duration-500 min-h-screen min-w-56`}>

   <Router>
    <div className="w-full">
      
     {/* Rendering the Navbar component */}
     <Navbar />
     <Routes>
       {/* Defining the root route */}
       <Route path="/" element={<Home />} />
       {/* Defining the about route */}
       <Route path="/about" element={<About />} />
       {/* Defining the contact route */}
       <Route path="/contact" element={<Contact />} />
  
     </Routes>
    </div>
   </Router>
  </div>
  
 )
}

// Exporting App as the default export
export default App