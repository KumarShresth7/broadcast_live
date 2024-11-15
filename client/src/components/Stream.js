import React, { useEffect, useState } from "react";
import { createStream, getLiveStreams } from "../api/streamApi";

const Stream = ({ token }) => {
  const [streamTitle, setStreamTitle] = useState("");
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await getLiveStreams();
        setStreams(response.data);
      } catch (error) {
        console.error("Error fetching streams:", error);
      }
    };
    fetchStreams();
  }, []);

  const handleCreateStream = async () => {
    try {
      await createStream({ title: streamTitle }, token);
      alert("Stream created successfully");
      setStreamTitle(""); // Clear input after creating stream
      const response = await getLiveStreams(); // Refresh the stream list
      setStreams(response.data);
    } catch (error) {
      console.error("Error creating stream:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-900 text-white">
      {/* Create Stream Section */}
      <div className="w-full max-w-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create Stream</h2>
        
        <input
          type="text"
          placeholder="Stream Title"
          value={streamTitle}
          onChange={(e) => setStreamTitle(e.target.value)}
          className="w-full p-3 bg-gray-800 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        
        <button
          onClick={handleCreateStream}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition duration-150"
        >
          Start Streaming
        </button>
      </div>

      {/* Live Streams Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Live Streams</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <div
              key={stream._id}
              className="p-4 bg-gray-800 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white truncate">{stream.title}</h3>
              <p className="mt-2 text-gray-400">
                Streamer: <span className="text-blue-400">{stream.streamer.username}</span>
              </p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold">
                Watch Now
              </button>
            </div>
          ))}
        </div>

        {/* Message when no streams are available */}
        {streams.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No live streams available. Create one to get started!</p>
        )}
      </div>
    </div>
  );
};

export default Stream;
