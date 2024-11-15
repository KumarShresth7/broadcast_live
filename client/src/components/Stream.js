import React, { useEffect, useState } from "react";
import { createStream, getLiveStreams } from "../api/streamApi";

const Stream = ({ token }) => {
  const [streamTitle, setStreamTitle] = useState("");
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = async () => {
      const response = await getLiveStreams();
      setStreams(response.data);
    };
    fetchStreams();
  }, []);

  const handleCreateStream = async () => {
    try {
      await createStream({ title: streamTitle }, token);
      alert("Stream created successfully");
      setStreamTitle(""); // Clear input after creating stream
    } catch (error) {
      console.error("Error creating stream:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-900 text-white">
      <div className="w-full max-w-lg mb-8">
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

      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Live Streams</h2>
        
        <ul className="space-y-3">
          {streams.map((stream) => (
            <li
              key={stream._id}
              className="p-4 bg-gray-800 rounded-lg shadow-md text-gray-200"
            >
              <span className="font-semibold">{stream.title}</span> by{" "}
              <span className="text-blue-400">{stream.streamer.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stream;
