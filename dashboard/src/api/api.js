import axios from "axios";

const api = axios.create({
    // baseURL: "https://sleepy-springs-71447-14ea80d8f8c8.herokuapp.com/api",
        baseURL: 'http://localhost:5000/api',

    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

export default api