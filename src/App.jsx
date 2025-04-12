/* eslint-disable react/prop-types */
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BlogContext from "./context/BlogContext";
import NotFound from "./components/NotFound";
import "./App.css";
import Blog from "./components/Blog";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

import Auth from "./components/Auth";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import Create from "./components/Create";

function App() {
  const blog = useContext(BlogContext);
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/auth" />;
  };
  const useFetchUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const userId = localStorage.getItem("token");
      if (!userId) return;

      const fetchUser = async () => {
        try {
          // 192.168.131.37/
          const url=import.meta.env.VITE_API_URL;
          const res = await fetch(url+"/api/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userId}`,
            },
          });

          if (!res.ok) {
            localStorage.removeItem("token");
            throw new Error("Failed to fetch user");
          }

          const data = await res.json();
          setUser(data);
        } catch (err) {
          console.error(err.message);
        }
      };

      fetchUser();
    }, []);

    return user;
  };

  const userData = useFetchUser();

  return (
    <div
      className={`${blog.colors.bg} ${blog.colors.color}  min-h-screen min-w-56`}
    >
      <Router>
        <div className="w-full  ">
          {/* Rendering the Navbar component */}
          <Navbar userData={userData} />
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="auth"
              element={
                <div className="lg:px-10">
                  {localStorage.getItem("token") ? (
                    <Navigate to="/" />
                  ) : (
                    <Auth />
                  )}
                </div>
              }
            />
            <Route
              path="/profile/:username"
              element={
                <PrivateRoute>
                  <Profile userData={userData} />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRoute>
                  <Create userData={userData} />
                </PrivateRoute>
              }
            />
            <Route path="about" element={<div className="lg:px-10"><About /></div>} />
            <Route path="Blog" element={<div className="lg:px-10"><Blog userData={localStorage.getItem("token")?userData:null} /></div>} />
            <Route path="terms" element={<div className="lg:px-10"><Terms /></div>} />
            <Route path="privacy" element={<div className="lg:px-10"><Privacy /></div>} />
            <Route path="*" element={<div className="lg:px-10"><NotFound /></div>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer position="bottom-right"/>
    </div>
  );
}

// Exporting App as the default export
export default App;

