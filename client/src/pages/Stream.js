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

  if (!stream) return <p>Loading stream...</p>;

  return (
    <div>
      <h2>{stream.title}</h2>
      <p>Streamer: {stream.streamer.username}</p>
      {/* Video player would be integrated here for the live stream */}
      <div>
        <h3>Chat Room</h3>
        <Chat room={id} />
      </div>
    </div>
  );
};

export default StreamPage;
