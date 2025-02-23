import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import BlogContext from "../context/BlogContext";

const Login = () => {
  const navigate = useNavigate();
  const { theme } = useContext(BlogContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/home");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="login-container flex items-center justify-center min-h-[80vh]"
    >
      <div className="w-96 rounded-lg shadow-lg p-6 ">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-3 py-2 border-2 rounded-md ${
                theme ? "bg-black text-white" : "bg-white text-black"
              } border-${theme ? "white" : "black"}`}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-3 py-2 border-2 rounded-md ${
                  theme ? "bg-black text-white" : "bg-white text-black"
                } border-${theme ? "white" : "black"}`}
              />
              <button
                type="button"
                className="absolute top-0 right-0 p-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <p className="text-center mt-4">
            Don&apos;t have an account? <Link className="text-blue-500" to="/register">Register</Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
