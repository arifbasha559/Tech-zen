import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";

const Register = () => {
  const { theme } = useContext(BlogContext);
  const blog = useContext(BlogContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
console.log(blog.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Call API to register user
    navigate("/login");
  };

  const bg = theme ? "bg-black" : "bg-white";
  const text = theme ? "text-white" : "text-black";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center min-h-[80vh] ${bg}`}
    >
      <div className="w-96 rounded-lg shadow-lg p-6">
        <h1 className={`text-2xl font-bold mb-4 ${text}`}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              <FaUser className="inline-block mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className={`w-full px-3 py-2 border-2 placeholder-gray-500  ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} border-${theme ? "white" : "black"} rounded-md`}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              <FaEnvelope className="inline-block mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`w-full px-3 py-2 border-2 placeholder-gray-500  ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} border-${theme ? "white" : "black"} rounded-md`}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2">
              <FaLock className="inline-block mr-2" /> Password
            </label>
            <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className={`w-full px-3 py-2 border-2 placeholder-gray-500  ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} border-${theme ? "white" : "black"} rounded-md`}
              required
              />
            <button
              type="button"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${text}`}
              onClick={() => setShowPassword(!showPassword)}
              >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
              </div>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block mb-2">
              <FaLock className="inline-block mr-2" /> Confirm Password
            </label>
            <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className={`w-full px-3 py-2 border-2  ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} border-${theme ? "white" : "black"} rounded-md`}
              required
              />
            <button
              type="button"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${text}`}
              onClick={() => setShowPassword(!showPassword)}
              >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
              </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ${text}`}
          >
            Register
          </button>
        </form>
        <p className={`mt-4 ${text}`}>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;

