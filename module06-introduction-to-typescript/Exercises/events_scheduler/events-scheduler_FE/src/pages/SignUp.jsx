import { useActionState } from "react";
import { Link, Navigate } from "react-router";

import { signUp as signUpAPI } from "../data";

const SignUp = () => {
  const signUpAction = async (_prevState, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Validation
    if (!email || !password || !confirmPassword) {
      return { error: "Please enter all fields", success: false };
    }

    if (password !== confirmPassword) {
      return { error: "Passwords do not match", success: false };
    }

    try {
      await signUpAPI({ email, password });
      return { error: null, success: true };
    } catch (err) {
      return { error: err.message || "Sign up failed", success: false };
    }
  };

  const [state, formAction, isPending] = useActionState(signUpAction, {
    error: null,
    success: false,
  });

  // Redirect to sign in page after successful sign up
  if (state.success) {
    return <Navigate to="/signin" />;
  }

  return (
    <main className="my-8 px-4">
      <div className="bg-base-100 border-base-300 mx-auto max-w-md rounded-lg border p-8 shadow-lg">
        <h2 className="text-primary mb-8 text-center text-3xl font-bold">
          Sign Up
        </h2>
        <form className="flex flex-col gap-6" action={formAction}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Email <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="email"
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
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Confirm Password <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="password"
              className="input input-bordered input-primary w-full"
              name="confirmPassword"
              disabled={isPending}
              placeholder="Confirm your password"
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
            {isPending ? "Signing up..." : "Sign Up"}
          </button>
          <p className="text-base-content/60 text-center text-sm">
            Already registered?{" "}
            <Link
              to="/signin"
              className="text-primary font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
