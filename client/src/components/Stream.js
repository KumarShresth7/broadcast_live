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
    } catch (error) {
      console.error("Error creating stream:", error);
    }
  };

  return (
    <div>
      <h2>Create Stream</h2>
      <input
        type="text"
        placeholder="Stream Title"
        value={streamTitle}
        onChange={(e) => setStreamTitle(e.target.value)}
      />
      <button onClick={handleCreateStream}>Start Streaming</button>

      <h2>Live Streams</h2>
      <ul>
        {streams.map((stream) => (
          <li key={stream._id}>{stream.title} by {stream.streamer.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stream;
