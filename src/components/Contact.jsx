import { Link } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useContext } from 'react'
import BlogContext from '../context/BlogContext'

const Contact = () => {
  const blog = useContext(BlogContext)
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4">
          Feel free to reach out to me if you have any questions, need help with a project, or just want to say hi!
        </p>
        <div className="mt-8 flex items-center">
          <Link to="mailto: example@gmail.com" className="mr-4 hover:text-red-500 transition-colors duration-300 ease-in-out">
            <FaEnvelope size={24} />
          </Link>
          <Link to="https://github.com/arifbasha559" className="mr-4 hover:text-green-500 transition-colors duration-300 ease-in-out">
            <FaGithub size={24} />
          </Link>
          <Link to="https://www.linkedin.com/in/arifbasha559/" className="mr-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://twitter.com/arifbasha559" target='' className="mr-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <form className="mt-4 " action="https://formspree.io/f/xbjvqkzo" method="POST">
          <div className="flex flex-col mb-4 ">
            <label htmlFor="name" className="mb-2 ">
              Name
            </label>
            <input type="text" name="name" id="name" className={`border-2 p-2 rounded-md ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} `} />
          </div>
          <div className="flex flex-col mb-4 ">
            <label htmlFor="email" className="mb-2 ">
              Email
            </label>
            <input type="email" name="_replyto" id="email" className={`border-2 p-2 rounded-md ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} `} />
          </div>
          <div className="flex flex-col mb-4 ">
            <label htmlFor="message" className="mb-2 ">
              Message
            </label>
            <textarea name="message" id="message" className={`border-2 p-2 rounded-md ${blog.theme ? 'bg-black text-white' : 'bg-white text-black'} `} rows={5} />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

