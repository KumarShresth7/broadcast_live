import axios from "axios";
import { baseUrl } from "../baseUrl";

export const followUser = (userId, token) =>
  axios.post(`${baseUrl}/api/users/follow/${userId}`, {}, {
    headers: { Authorization: token },
});




