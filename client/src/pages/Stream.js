import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";
import { getStream } from "../api/streamApi";

const StreamPage = () => {
  const { id } = useParams();
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await getStream(id);
        setStream(response.data);
      } catch (error) {
        console.error("Error fetching stream:", error);
      }
    };
    fetchStream();
  }, [id]);

  if (!stream) return <p className="text-white text-center">Loading stream...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-2">{stream.title}</h2>
        <p className="text-lg text-gray-400 mb-8">Streamer: {stream.streamer.username}</p>
        
        {/* Placeholder for video player */}
        <div className="w-full max-w-4xl h-72 bg-gray-700 rounded-lg mb-8"></div>

        <div className="w-full max-w-4xl bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Chat Room</h3>
          <Chat room={id} />
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
