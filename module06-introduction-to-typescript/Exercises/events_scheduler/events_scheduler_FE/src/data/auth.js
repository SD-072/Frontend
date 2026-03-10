/**
 * AUTHENTICATION API FUNCTIONS
 *
 * This file contains all functions that communicate with the backend
 * authentication API. It's organized in a "data layer" pattern - keeping
 * all API calls in one place makes the code easier to maintain.
 */

const API_URL = "http://localhost:3001/api/auth";

/**
 * Sign In Function
 *
 * Sends email + password to backend, receives token + user data
 *
 * @param {Object} credentials - { email: string, password: string }
 * @returns {Object} - { token: string, user: object }
 * @throws {Error} - If login fails
 */
export const signIn = async (credentials) => {
  // Make POST request to login endpoint
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tell server we're sending JSON
    },
    body: JSON.stringify(credentials), // Convert JS object to JSON string
  });

  // Check if request was successful
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Sign in failed");
  }

  // Parse JSON response
  const data = await res.json();
  return data; // Contains { token, user }
};

/**
 * Sign Up Function
 *
 * Creates a new user account
 *
 * @param {Object} credentials - { email: string, password: string }
 * @returns {Object} - User data
 * @throws {Error} - If registration fails
 */
export const signUp = async (credentials) => {
  const res = await fetch("http://localhost:3001/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Sign up failed");
  }

  const data = await res.json();
  return data;
};

/**
 * Get Profile Function
 *
 * Fetches current user data using stored token
 * This is how we "auto-login" - if token exists, get user info
 *
 * @returns {Object} - User profile data
 * @throws {Error} - If token is invalid or expired
 */
export const getProfile = async () => {
  // Get token from browser storage
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  // Make authenticated request (token in Authorization header)
  const res = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`, // Standard format for JWT tokens
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to get profile");
  }

  const data = await res.json();
  return data;
};
