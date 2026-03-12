import { useActionState } from "react";
import { Link, Navigate } from "react-router";

import { useAuth } from "../context/userContext";
import { signIn as signInAPI } from "../data";

/**
 * SIGN IN PAGE
 *
 * Form handling with React 19's useActionState hook
 * This replaces the old pattern of manually managing form state + loading + errors
 */
const SignIn = () => {
  // Get auth functions and current user from Context
  const { signIn, user } = useAuth();

  /**
   * Form Action Function
   * This is called when form is submitted
   *
   * @param {Object} prevState - Previous form state (not used here)
   * @param {FormData} formData - Browser FormData object with form fields
   * @returns {Object} - New state object with error/success
   */
  const signInAction = async (_prevState, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    // Simple validation
    if (!email || !password) {
      return { error: "Please enter all fields", success: false };
    }

    try {
      // Call API function from data layer
      const data = await signInAPI({ email, password });

      // Update global user state
      signIn(data.token, data.user);

      // Return success state
      return { error: null, success: true };
    } catch (err) {
      // Return error state (will be shown to user)
      return { error: err.message || "Sign in failed", success: false };
    }
  };

  /**
   * useActionState Hook
   * Handles form submission automatically!
   * Returns:
   * - state: Current form state (errors, etc.)
   * - formAction: Pass this to form's action prop
   * - isPending: True while form is submitting (for loading states)
   */
  const [state, formAction, isPending] = useActionState(signInAction, {
    error: null,
    success: false,
  });

  // Already logged in? Redirect to home
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <main className="my-8 px-4">
      <div className="bg-base-100 border-base-300 mx-auto max-w-md rounded-lg border p-8 shadow-lg">
        <h2 className="text-primary mb-8 text-center text-3xl font-bold">
          Sign In
        </h2>
        <form className="flex flex-col gap-6" action={formAction}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Email <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered input-primary w-full"
              name="email"
              disabled={isPending}
              placeholder="Enter your email"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Password <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="password"
              className="input input-bordered input-primary w-full"
              name="password"
              disabled={isPending}
              placeholder="Enter your password"
            />
          </label>
          {state.error && (
            <div className="alert alert-error">
              <span>{state.error}</span>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary mt-2 w-full"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>
          <p className="text-base-content/60 text-center text-sm">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
