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
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        )}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Switch to Login" : "Switch to Register"}
      </button>
    </div>
  );
};

export default Auth;
