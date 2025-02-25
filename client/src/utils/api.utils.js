import axios from "axios";
import { API_URL } from "../config/constants";

const api = axios.create({
  baseURL: API_URL,
});

export const setAccessToken = (token) => {

  if(!token) {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('accessToken')
    return 
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  localStorage.setItem('accessToken', token)
}

export default api;
