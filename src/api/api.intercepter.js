import axios from 'axios';
import { API_BASE_URL } from './api.config';

const handleRefreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh');
    if (!refreshToken) return;

    try {
        const response = await axios.post(`${API_BASE_URL}/api/v1/users/refresh`, {
            "refresh_token": refreshToken,
        });
        localStorage.setItem('token', response.data.access_token);
    } catch (error) {
        console.error('Error refreshing token:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        localStorage.removeItem('user');
        window.location.reload();
    }
};

// Configure axios defaults
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 500000, // 500 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for adding auth tokens or other headers
api.interceptors.request.use(
    (config) => {
        // Add auth tokens if they exist
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling errors globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        if (error.response?.data?.detail === "Could not validate credentials") {
            handleRefreshToken().then(() => {
                console.log('Token refreshed successfully');
                window.location.reload();
            }).catch((err) => {
                console.error('Error refreshing token:', err);
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                window.location.reload();
            });
        }
        return Promise.reject(error);
    }
);

/**
 * Generic GET request
 * @param {string} endpoint - The API endpoint
 * @param {Object} params - Query parameters
 */
export const get = async (endpoint, params = {}) => {
    const response = await api.get(endpoint, { params });
    return response.data;
};

/**
 * Generic POST request
 * @param {string} endpoint - The API endpoint
 * @param {Object} data - Request body data
 */
export const post = async (endpoint, data = {}) => {
    const response = await api.post(endpoint, data);
    return response.data;
};

/**
 * Generic PUT request
 * @param {string} endpoint - The API endpoint
 * @param {Object} data - Request body data
 */
export const put = async (endpoint, data = {}) => {
    const response = await api.put(endpoint, data);
    return response.data;
};

/**
 * Generic DELETE request
 * @param {string} endpoint - The API endpoint
 */
export const del = async (endpoint) => {
    const response = await api.delete(endpoint);
    return response.data;
};

export default api;