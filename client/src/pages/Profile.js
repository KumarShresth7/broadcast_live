import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile, followUser } from "../api/userApi";

const ProfilePage = ({ token }) => {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile(token);
        setProfile(response.data);
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [token]);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile({ username }, token);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleFollow = async (userId) => {
    try {
      await followUser(userId, token);
      alert("User followed successfully");
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  if (!profile) return <p className="text-white text-center">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">Profile Page</h2>
      
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl mb-2">Username</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 rounded text-white"
        />
        <button
          onClick={handleUpdateProfile}
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded mt-2"
        >
          Update Profile
        </button>

        <h3 className="text-2xl mt-8 mb-4">Following</h3>
        <ul className="space-y-2">
          {profile.following.map((user) => (
            <li key={user._id} className="flex items-center justify-between bg-gray-700 p-2 rounded">
              {user.username}
              <button
                onClick={() => handleFollow(user._id)}
                className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
              >
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
