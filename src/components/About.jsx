import { FaGithub, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";

const About = () => {
  const blog = useContext(BlogContext);

  return (
    <div className={`about-section p-6 ${blog.colors.bg} shadow-lg rounded-lg`}>
      <h2 className={`text-3xl font-bold mb-4 ${blog.colors.color}`}>About Tech-Zen</h2>
      <p className={`text-lg ${blog.colors.color}`}>
        <strong>Tech-Zen</strong> is a modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds. Whether you&apos;re a seasoned programmer, a tech newbie, or someone who loves exploring the latest trends in technology, Tech-Zen is your go-to destination for insightful articles, tutorials, and industry updates.
      </p>
      <p className={`text-lg ${blog.colors.color} mt-4`}>
        Our mission is to create a space where technology meets simplicity. We believe in breaking down complex concepts into digestible content, making tech accessible to everyone. From coding tutorials and software development tips to the latest in AI, cybersecurity, and gadget reviews, Tech-Zen covers it all.
      </p>
      <p className={`text-lg ${blog.colors.color} mt-4`}>
        Join our community, share your knowledge, and stay updated with the ever-evolving world of technology. Let’s embrace the future, one blog post at a time.
      </p>
      <div className="flex items-center justify-center mt-8">
        <a href="https://github.com/arifbasha559/tech-zen" target="_blank" rel="noopener noreferrer" className={`bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full mr-4 flex gap-1 justify-center items-center transition duration-300 ease-in-out transform hover:scale-105`}>
          <FaGithub className="mr-2" />
          GitHub
        </a>
        <a href="https://twitter.com/techzenblog" target="_blank" rel="noopener noreferrer" className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex gap-1 justify-center items-center transition duration-300 ease-in-out transform hover:scale-105`}>
          <FaTwitter className="mr-2" />
          Twitter
        </a>
      </div>
    </div>
  );
}

export default About;

