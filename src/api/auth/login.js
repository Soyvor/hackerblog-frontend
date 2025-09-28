import { endpoints } from "../api.config";
import api from "../api.intercepter";

/**
 * Login function that authenticates user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Promise that resolves to the login response
 */
export const loginAPI = async (email, password) => {
    try {
        const response = await api.post(endpoints.login, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.detail || 'Login failed. Please try again.');
    }
};