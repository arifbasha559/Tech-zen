/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";
import Card from "./Card";
import banner from "../assets/banner.png";
import { FiEdit } from "react-icons/fi";
import BlogContent from "./BlogContent";

const Profile = (props) => {
  const { username: initialUsername } = useParams();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: "arifasd",
    name: "arifasd",
    email: "arifbasha@gmail.com",
    posts: [],
  });
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  const [editingField, setEditingField] = useState(null);
  const [tempValues, setTempValues] = useState({
    name: "",
    username: "",
  });

  const inputRef = useRef(null);
  const url = import.meta.env.VITE_API_URL;

  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      const res = await fetch(url + "/api/posts/pro/" + username + "/", {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await res.json();
      console.log(data);

      setUserPosts(data.posts);
      setUserInfo(data.user);
      setTempValues({
        name: data.user.name,
        username: data.user.username,
      });
    } catch (err) {
      toast.error("Server Error" + err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };

  const updateUserInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch(url + "/api/posts/pro/" + initialUsername + "/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          [editingField]: tempValues[editingField],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update user info");
      }

      setUserInfo((prev) => ({
        ...prev,
        [editingField]: tempValues[editingField],
      }));
      setEditingField(null);

      if (editingField === "username") {
        navigate(`/profile/${tempValues.username}`);
      }

      toast.success(`Updated ${editingField} successfully`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Server Error", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData(initialUsername);
  }, [initialUsername]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        cancelEdit(editingField);
      }
    };

    if (editingField) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingField]);

  const handleEditClick = (field) => {
    if (editingField === field) {
      updateUserInfo();
    } else {
      setEditingField(field);
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      updateUserInfo();
    } else if (e.key === "Escape") {
      cancelEdit(field);
    }
  };

  const cancelEdit = (field) => {
    setEditingField(null);
    setTempValues((prev) => ({
      ...prev,
      [field]: userInfo[field],
    }));
  };

  const handleChange = (e, field) => {
    setTempValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const searchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=47897092-9c2f8cae15ca662cb2e33adf1&q=programming&per_page=200`
        );
        const data = await response.json();
        // console.log (data);
        setData(data.hits); // Set the state with the fetched data
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    searchImages();
  }, []);
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col items-center text-center mb-10">
            <img
              src={banner}
              alt={userInfo.username}
              className="w-24 h-24 rounded-full shadow-lg mb-4"
            />

            <div className="flex items-center mb-2">
              {editingField === "name" ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={tempValues.name}
                  onChange={(e) => handleChange(e, "name")}
                  onKeyDown={(e) => handleKeyDown(e, "name")}
                  autoFocus
                  className="text-3xl font-bold text-center border-b-2 bg-inherit w-fit border-gray-300 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h2 className="text-3xl font-bold">{userInfo.name}</h2>
              )}
              {props.userData.username === userInfo.username && (
                <button
                  onClick={() => handleEditClick("name")}
                  className="ml-2 text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="Edit name"
                >
                  <FiEdit size={20} />
                </button>
              )}
            </div>

            <div className="flex items-center">
              {editingField === "username" ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={tempValues.username}
                  onChange={(e) => handleChange(e, "username")}
                  onKeyDown={(e) => handleKeyDown(e, "username")}
                  autoFocus
                  className="text-gray-600 text-center border-b-2 bg-inherit w-fit border-gray-300 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p className="text-gray-600">@{userInfo.username}</p>
              )}
              {props.userData.username === userInfo.username && (
                <button
                  onClick={() => handleEditClick("username")}
                  className="ml-2 text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="Edit username"
                >
                  <FiEdit size={16} />
                </button>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-center">
            Posts by {userInfo.username}
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {userPosts.length > 0 ? (
              userPosts.map((post, idx) => (
                <Card
                  key={idx}
                  title={post.title}
                  profile_image={banner}
                  description={post.description}
                  category={post.tag_list}
                  date={post.published_timestamp}
                  author={post.author}
                  onReadMore={() => setSelectedPost(post)}
                  image={data[idx]?.webformatURL}
                  link={`/post/${post._id}`}
                />
              ))
            ) : (
              <p className="text-center text-gray-600">No posts found.</p>
            )}
          </div>
        </>
      )}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <BlogContent
            posts={selectedPost}
            onClose={() => setSelectedPost(null)}
            userData={props.userData}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
