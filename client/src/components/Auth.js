import React, { useState } from "react";
import { register, login } from "../api/authApi";

const Auth = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isRegistering ? await register(form) : await login(form);
      setToken(response.data.token);
      console.log('User created successfully')
    } catch (error) {
      console.error("Authentication failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold transition duration-150"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="w-full mt-4 text-blue-400 hover:text-blue-500 transition duration-150 text-sm"
        >
          {isRegistering ? "Switch to Login" : "Switch to Register"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
