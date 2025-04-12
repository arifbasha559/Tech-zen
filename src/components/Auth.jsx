import { IoLockClosedOutline } from "react-icons/io5";
import { FiAtSign, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import BlogContext from "../context/BlogContext";
import { toast, ToastContainer } from "react-toastify";

function Auth() {
  const [pass, setPass] = useState(false);
  const [sign, setSign] = useState(true);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useContext(BlogContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sign && (!name || !username || !email || !password)) {
      toast.error("All fields are required", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!email || !password) {
      toast.error("Email and password are required", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const Api_url=import.meta.env.VITE_API_URL;

    const url = sign
      ? Api_url+"/api/auth/signup"
      : Api_url+"/api/auth/login";

    const payload = sign
      ? { username, name, email, password }
      : { email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      console.log("Success:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Error:", err.message);
      toast.error(err.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const bg = theme ? "bg-black" : "bg-white";
  const text = theme ? "text-white" : "text-black";

  return (
    <div
      className={`relative min-h-[calc(100vh-64px)] flex justify-center items-center w-full ${bg}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 mx-20 p-8 w-[450px] rounded-2xl font-sans shadow-[0px_0px_15px_0px] ${bg}`}
      >
        <h2 className={`text-center text-2xl font-bold ${text}`}>
          {sign ? "Create an Account" : "Sign In"}
        </h2>

        {sign && (
          <>
            <div className="flex flex-col">
              <label className={`font-semibold ${text}`}>Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
                <FiUser className="w-5 h-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`ml-2 w-full border-none outline-none bg-inherit ${text}`}
                  placeholder="Enter your Name"
                  
                />
              </div>
              <div className="flex flex-col">
                <label className={`font-semibold ${text}`}>Username</label>
                <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
                  <FiUser className="w-5 h-5" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className={`ml-2 w-full border-none outline-none bg-inherit ${text}`}
                    placeholder="Enter your Username"
                    
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col">
          <label className={`font-semibold ${text}`}>Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
            <FiAtSign className="w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`ml-2 w-full border-none outline-none bg-inherit ${text}`}
              placeholder="Enter your Email"
              
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className={`font-semibold ${text}`}>Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
            <IoLockClosedOutline className="size-5 cursor-pointer" />
            <input
              type={pass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`ml-2 w-full border-none outline-none bg-inherit ${text}`}
              placeholder="Enter your Password"
              
            />
            {pass ? (
              <FiEyeOff
                onClick={() => setPass(!pass)}
                className="cursor-pointer w-5 h-5"
              />
            ) : (
              <FiEye
                onClick={() => setPass(!pass)}
                className="cursor-pointer w-5 h-5"
              />
            )}
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            
          </div>
          <span className="text-blue-500 cursor-pointer hover:underline underline-offset-2">
            Forgot password?
          </span>
        </div>

        <button
          type="submit"
          className={`w-full ${
            bg == "bg-black" ? "bg-gray-600" : "bg-gray-900 text-white"
          }  font-medium text-lg rounded-lg h-12 mt-5 hover:bg-gray-800`}
        >
          {sign ? "Sign Up" : "Sign In"}
        </button>

        <p className={`text-center text-sm ${text}`}>
          {sign ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setSign(!sign)}
            className="text-blue-500 cursor-pointer hover:underline underline-offset-2"
          >
            {sign ? "Sign In" : "Sign Up"}
          </button>
        </p>

        <p className={`text-center text-sm ${text}`}>Or With</p>
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg h-12 gap-2 hover:border-blue-500"
          >
            <FcGoogle className="w-5 h-5" />
            Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center border border-gray-300  rounded-lg h-12 gap-2 hover:border-blue-500"
          >
            <FaApple className="w-5 h-5" />
            Apple
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme ? "dark" : "light"}
      />
    </div>
  );
}

export default Auth;

