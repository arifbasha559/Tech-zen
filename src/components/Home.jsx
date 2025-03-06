import { useContext } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../context/BlogContext";

// eslint-disable-next-line react/prop-types
const Section = ({ title, description, link, linkText }) => {
  const blog = useContext(BlogContext);
  return (
    <div
      className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        blog.theme ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link to={link} className="text-blue-600 hover:underline">
        {linkText} →
      </Link>
    </div>
  );
};

const HeroSection = () => {
  const blog = useContext(BlogContext);
  return (
    <div
      className={`py-20 ${
        blog.theme ? "bg-blue-800" : "bg-blue-600"
      } shadow-lg shadow-gray-500 rounded-bl-lg rounded-br-lg text-white w-full text-center`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">Welcome to Tech-Zen</h1>
        <p className="text-2xl mb-8">
          Your one-stop destination for the latest tech news, tutorials, and tools to enhance your skills and productivity.
        </p>
        <Link
          to="/blog"
          className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
            blog.theme
              ? "bg-gray-700 text-white hover:bg-gray-900"
              : "bg-white text-blue-600 hover:bg-blue-200"
          }`}
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

const CTASection = () => {
  const blog = useContext(BlogContext);
  return (
    <div className={`py-16 w-full ${blog.theme ? "bg-gray-900" : "bg-gray-800"} text-white text-center`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready to Level Up Your Tech Skills?</h2>
        <p className="text-2xl mb-8">
          Join Tech-Zen today and get access to exclusive content, tutorials, and resources.
        </p>
        <Link
          to="/register"
          className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
            blog.theme ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const blog = useContext(BlogContext);
  return (
    <div className={`min-h-screen ${blog.colors.bg} flex flex-col items-center justify-center`}>
      <HeroSection />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Section
            title="Tech News"
            description="Stay updated with the latest trends and breakthroughs in the tech world."
            link="/news"
            linkText="Read More"
          />
          <Section
            title="Tutorials"
            description="Step-by-step guides to master programming languages, frameworks, and tools."
            link="/tutorials"
            linkText="Explore Tutorials"
          />
          <Section
            title="Tools & Resources"
            description="Discover essential tools and resources to boost your productivity."
            link="/tools"
            linkText="View Tools"
          />
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Home;
