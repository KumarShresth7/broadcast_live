import { Link } from 'react-router-dom';

export default function VideoCard({ videoID, thumbnailUrl, title, username, viewers }) {
  return (
    <Link to={`/video/${videoID}`}>
      <div className="bg-gray-900 w-60 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        {/* Video Thumbnail */}
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt={`${title} thumbnail`}
            className="object-cover w-full h-36"
          />
          {/* Live Indicator */}
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            LIVE
          </span>
        </div>

        {/* Video Details */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-white font-semibold text-sm line-clamp-2">{title}</h3>
          
          {/* User Info */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full">
              {/* Placeholder for user avatar */}
              <img
                src="/user-avatar-placeholder.jpg" // Replace with actual avatar URL
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="text-xs text-gray-400">
              <p className="text-white font-semibold">{username}</p>
              <p>{viewers} viewers</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
