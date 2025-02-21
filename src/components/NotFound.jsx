import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404 - Not Found</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline text-lg flex items-center">
        <FaHome className="mr-2" /> Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
