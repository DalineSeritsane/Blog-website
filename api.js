import axios from "axios";

// Create an axios instance for API requests
const api = axios.create({
    baseURL: "http://localhost:5000",
});

// Add request interceptor to attach the token to all request 
api.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem("token"); //Get token from localStorage
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // Attach token to authorization header

        } return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;