import { endpoints } from "../api.config";
import api from "../api.intercepter";

/**
 * Register function that creates a new user account
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Promise that resolves to the registration response
 */
export const registerAPI = async (firstName, lastName, email, password) => {
    try {
        const response = await api.post(endpoints.register, {
            firstName,
            lastName,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.detail || 'Registration failed. Please try again.');
    }
};