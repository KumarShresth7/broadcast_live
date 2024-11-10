import axios from "axios";
import { baseUrl } from "../baseUrl";

export const register = (data) => axios.post(`${baseUrl}/api/auth/register`, data);
export const login = (data) => axios.post(`${baseUrl}/api/auth/login`, data);
