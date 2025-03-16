import { useContext } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { VscTools } from "react-icons/vsc";
import { PiBooks } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";


const TestimonialIcon = () => (
  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Home = () => {
  const blog = useContext(BlogContext);

  return (
    <div className={`min-h-screen ${blog.colors.bg} text-black flex flex-col items-center justify-center`}>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Welcome to Tech-Zen
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up delay-100">
            Your one-stop destination for the latest tech news, tutorials, and tools to enhance your skills and productivity.
          </p>
          <Link
            to="/blog"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-100 transition duration-300 animate-fade-in-up delay-200"
          >
            Explore Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tech News Card */}
          <div className={`p-8 bg-gradient-to-b ${ 
            blog.colors.bg !== "bg-black"
              ? " from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
              : " from-[#212121] to-[#212121] text-white"
          } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2`}>
           <IoNewspaperOutline  className="w-10 h-10 mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Tech News</h3>
            <p className="text-lg mb-6">
              Stay updated with the latest trends and breakthroughs in the tech world.
            </p>
            <Link
              to="/news"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Read More
            </Link>
          </div>

          {/* Tutorials Card */}
          <div className={`p-8 bg-gradient-to-b ${ 
            blog.colors.bg !== "bg-black"
              ? " from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
              : " from-[#212121] to-[#212121] text-white"
          } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2`}>
            <PiBooks  className="w-10 h-10 mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Tutorials</h3>
            <p className="text-lg mb-6">
              Step-by-step guides to master programming languages, frameworks, and tools.
            </p>
            <Link
              to="/tutorials"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore Tutorials
            </Link>
          </div>

          {/* Tools & Resources Card */}
          <div className={`p-8 bg-gradient-to-b ${ 
            blog.colors.bg !== "bg-black"
              ? " from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
              : " from-[#212121] to-[#212121] text-white"
          } rounded-lg shadow-lg hover:shadow-xl transition-all  duration-300 transform hover:-translate-y-2`}>
            <VscTools className="w-10 h-10 mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Tools & Resources</h3>
            <p className="text-lg mb-6">
              Discover essential tools and resources to boost your productivity.
            </p>
            <Link
              to="/tools"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Tools
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`w-full ${ 
            blog.colors.bg !== "bg-black"
              ? "bg-blue-100  text-black"
              : " bg-slate-950  text-white"
          } py-16`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 text-black gap-8">
            <div className={`p-8 bg-white rounded-lg shadow-lg bg-gradient-to-b ${ 
            blog.colors.bg !== "bg-black"
              ? " from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
              : " from-[#212121] to-[#212121] text-white"
          }`}>
              <TestimonialIcon />
              <p className="text-lg mb-4">
                &quot;Tech-Zen has been a game-changer for me. The tutorials are easy to follow, and the tools section is a goldmine!&quot;
              </p>
              <p className="font-semibold">— Jane Doe</p>
            </div>
            <div className={`p-8 bg-white rounded-lg shadow-lg bg-gradient-to-b ${ 
            blog.colors.bg !== "bg-black"
              ? " from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
              : " from-[#212121] to-[#212121] text-white"
          }`}>
              <TestimonialIcon />
              <p className="text-lg mb-4">
                &quot;I love staying updated with the latest tech news. Tech-Zen is my go-to resource for everything tech-related.&quot;
              </p>
              <p className="font-semibold">— John Smith</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Level Up Your Tech Skills?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-100">
            Join Tech-Zen today and get access to exclusive content, tutorials, and resources.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-100 transition duration-300 animate-fade-in-up delay-200"
          >
            Get Started
          </Link>
        </div>
      </div>

    
    </div>
  );
};

export default Home;