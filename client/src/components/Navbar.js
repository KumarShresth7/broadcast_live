import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-3 shadow-lg fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center space-x-4">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-purple-500 hover:text-purple-400 mx-10">
          Live Broadcast
        </Link>

        {/* Center Navigation Links (Visible on larger screens) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/categories" className="hover:text-purple-400">Categories</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
        </div>

        {/* Search and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pl-10 w-48 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FiSearch className="absolute top-3 left-3 text-gray-500" />
          </div>

          {/* Profile Link */}
          <Link to="/profile/your-username" className="flex items-center space-x-2 hover:text-purple-400">
            <FiUser className="text-lg" />
            <span>Profile</span>
          </Link>
        </div>

        {/* Hamburger Icon (Visible on smaller screens) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Sidebar for smaller screens */}
      <div
        className={`fixed top-0 right-0 bg-gray-800 text-white w-64 h-full transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-10">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/categories" className="hover:text-purple-400">Categories</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
        </div>
      </div>
    </header>
  );
}
