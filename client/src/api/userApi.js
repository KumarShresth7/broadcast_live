import axios from "axios";
import { baseUrl } from "../baseUrl";

export const followUser = (userId, token) =>
  axios.post(`${baseUrl}/api/users/follow/${userId}`, {}, {
    headers: { Authorization: token },
});

export const getUserProfile = (token) =>
  axios.get(`${baseUrl}/api/users/profile`, { headers: { Authorization: token } });

export const updateProfile = (data, token) =>
  axios.put(`${baseUrl}/api/users/profile`, data, { headers: { Authorization: token } });




