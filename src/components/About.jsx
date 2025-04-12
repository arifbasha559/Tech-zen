/* This code snippet defines a functional component named `About` in a JavaScript React application.
Here's a breakdown of what the code is doing: */
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";

const About = () => {
  const blog = useContext(BlogContext);

  const socialLinks = [
    { 
      icon: <FaGithub className="text-xl" />, 
      url: "https://github.com/arifbasha559/",
      name: "GitHub",
      bg: "bg-gray-800 hover:bg-gray-900"
    },
    { 
      icon: <FaTwitter className="text-xl" />, 
      url: "https://twitter.com/arifbasha559",
      name: "Twitter",
      bg: "bg-blue-500 hover:bg-blue-600"
    },
    { 
      icon: <FaLinkedin className="text-xl" />, 
      url: "https://linkedin.com/arifbasha559",
      name: "LinkedIn",
      bg: "bg-blue-700 hover:bg-blue-800"
    }
    
  ];

  const stats = [
    { value: "100+", label: "Articles" },
    { value: "50K+", label: "Readers" },
    { value: "10+", label: "Contributors" },
    { value: "5+", label: "Years" }
  ];

  return (
    <div className={`about-section p-6 md:p-8 lg:p-10 ${blog.colors.bg} shadow-lg rounded-lg max-w-4xl mx-auto`}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${blog.colors.color}`}>About Tech-Zen</h2>
        <div className={`w-20 h-1 mx-auto ${blog.colors.accentBg}`}></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className={`text-lg ${blog.colors.color} mb-4 leading-relaxed`}>
            <strong className="font-semibold">Tech-Zen</strong> is more than just a blog — it&apos;s a thriving community for tech enthusiasts, developers, and creators passionate about shaping the digital future. Our platform serves everyone from seasoned engineers to tech-curious beginners.
          </p>
          
          <p className={`text-lg ${blog.colors.color} mb-4 leading-relaxed`}>
            We demystify technology through <span className="font-semibold">accessible tutorials</span>, <span className="font-semibold">cutting-edge insights</span>, and <span className="font-semibold">real-world project breakdowns</span>. Our mission is to educate, inspire, and connect a global community of tech-savvy individuals.
          </p>
        </div>
        
        <div>
          <div className={`p-4 rounded-lg ${
        blog.colors.bg !== "bg-black"
          ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
          : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
      } shadow-sm `}>
            <h3 className={`text-xl font-semibold mb-3 ${blog.colors.color}`}>🚀 What We Cover</h3>
            <ul className={`grid grid-cols-2 gap-2 ${blog.colors.color}`}>
              {["Web Development", "JavaScript", "AI/ML", "Open Source", 
                "Cybersecurity", "Cloud", "DevOps", "Blockchain"].map((topic) => (
                <li key={topic} className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${blog.colors.accentBg}`}></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`mt-6 p-4 rounded-lg ${
        blog.colors.bg !== "bg-black"
          ? "bg-gradient-to-b from-[#F0F4FF] to-[#E6F9FF] text-gray-800"
          : "bg-gradient-to-b from-[#212121] to-[#212121] text-white"
      } shadow-sm`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-3">
              <div className={`text-2xl font-bold ${blog.colors.accentColor}`}>{stat.value}</div>
              <div className={`text-sm ${blog.colors.color}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <p className={`text-center text-lg italic ${blog.colors.color} mb-6`}>
          &quot;Join our journey of exploration and innovation. Together, let&apos;s build the future of technology.&quot;
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bg} text-white font-medium py-2 px-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105`}
              aria-label={link.name}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className={`mt-8 text-center text-sm ${blog.colors.color} flex items-center justify-center gap-1`}>
        Made with <FaHeart className="text-red-500" /> by the Tech-Zen community
      </div>
    </div>
  );
};

export default About;