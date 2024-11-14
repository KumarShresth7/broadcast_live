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

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>Profile Page</h2>
      <h3>Username: {profile.username}</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>

      <h3>Following</h3>
      <ul>
        {profile.following.map((user) => (
          <li key={user._id}>
            {user.username} <button onClick={() => handleFollow(user._id)}>Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
