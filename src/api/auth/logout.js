import { endpoints } from "../api.config";
import api from "../api.intercepter";

/**
 * Logout function that logs out the user
 */

export const logoutAPI = async () => {
    try {
        const refresh = localStorage.getItem("refresh");
        const response = await api.post(endpoints.logout, { "refresh_token": refresh });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.detail || 'Failed to logout.');
    }
};