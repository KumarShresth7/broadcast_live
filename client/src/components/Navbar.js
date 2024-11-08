// components/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser } from 'react-icons/fi';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-gray-900 text-white p-3 shadow-lg fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center space-x-4">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-purple-500 hover:text-purple-400 mx-10">
          Live Broadcast
        </Link>

        {/* Center Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/categories" className="hover:text-purple-400">
            Categories
          </Link>
          <Link to="/about" className="hover:text-purple-400">
            About
          </Link>
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
      </nav>
    </header>
  );
}
