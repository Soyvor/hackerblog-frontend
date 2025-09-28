/**
 * Authentication utility functions
 * Handles token and user data management
 */

/**
 * Store authentication data after successful login
 * @param {string} token - JWT token
 * @param {Object} user - User data object
 */
export const setAuthData = (token, refresh, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh', refresh);
    localStorage.setItem('user', JSON.stringify(user));
};

/**
 * Get stored authentication token
 * @returns {string|null} - JWT token or null if not found
 */
export const getToken = () => {
    return localStorage.getItem('token');
};

/**
 * Get stored user data
 * @returns {Object|null} - User data object or null if not found
 */
export const getUser = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
};

/**
 * Check if user is authenticated
 * @returns {boolean} - True if user has valid token
 */
export const isAuthenticated = () => {
    return !!getToken();
};

/**
 * Clear all authentication data (logout)
 */
export const clearAuthData = () => {
    localStorage.removeItem('refresh');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

/**
 * Update stored user data
 * @param {Object} userData - Updated user data
 */
export const updateUserData = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
};