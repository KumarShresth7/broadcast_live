import axios from "axios";
import { baseUrl } from "../baseUrl";

export const createStream = (data, token) =>
  axios.post(`${baseUrl}/api/streams/create`, data, {
    headers: { Authorization: token },
  });

export const getLiveStreams = () => axios.get(`${baseUrl}/api/streams/live`);

export const getStream = (streamId) => axios.get(`${baseUrl}/api/streams/${streamId}`);

