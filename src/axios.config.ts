import axios from "axios";

const API_URL = "http://localhost:3001";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
export default instance;
