import { createContext, useContext, useEffect, useState } from "react";

import { getProfile } from "../data";

/**
 * USER AUTHENTICATION CONTEXT
 *
 * This context manages user authentication state across the entire app.
 * It stores the currently logged-in user and provides functions to sign in/out.
 */
const UserContext = createContext();

/**
 * Custom Hook: useAuth
 *
 * Makes it easy to access auth data in any component:
 * const { user, signIn, signOut } = useAuth();
 */
export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within UserProvider");
  }
  return context;
};

const UserProvider = ({ children }) => {
  // State: stores the current user object (or null if not logged in)
  const [user, setUser] = useState(null);

  // State: tracks if we're still checking if user is logged in
  const [loading, setLoading] = useState(true);

  /**
   * Auto-Login on Page Refresh
   *
   * When the app loads, check if there's a token in localStorage.
   * If yes, try to get user data from the API.
   * This keeps users logged in even after closing the browser.
   */
  useEffect(() => {
    const checkAuth = async () => {
      // No token? User is not logged in
      if (!localStorage.getItem("token")) {
        setLoading(false);
        return;
      }

      try {
        // Token exists, fetch user data
        const userData = await getProfile();
        setUser(userData);
      } catch (err) {
        // Token expired or invalid? Clean up
        console.error("Auth check failed:", err);
        localStorage.removeItem("token");
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    };

    checkAuth();
  }, []); // Empty array = run only once when component mounts

  /**
   * Sign In Function
   * Called after successful login from SignIn page
   */
  const handleSignIn = (token, userData) => {
    localStorage.setItem("token", token); // Save token for future requests
    setUser(userData); // Update state with user info
  };

  /**
   * Sign Out Function
   * Clear user data and remove token
   */
  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Package everything to share with the app
  const values = {
    user, // Current user object
    loading, // Is auth check in progress?
    signIn: handleSignIn,
    signOut,
  };

  // Provide these values to all children components
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
