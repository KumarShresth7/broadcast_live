import axios from "axios";
import { baseUrl } from "../baseUrl";

export const register = (data) =>
    axios.post(`${baseUrl}/api/auth/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
});

export const login = (data) => axios.post(`${baseUrl}/api/auth/login`, data);
