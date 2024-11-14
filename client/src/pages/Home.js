import React, { useState } from "react";
import Auth from "../components/Auth";
import Stream from "../components/Stream";

const HomePage = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div>
        {token ? (
          <Stream token={token} />
        ) : (
          <Auth setToken={setToken} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
