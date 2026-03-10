import { Link } from "react-router";

import { useAuth } from "../context/userContext";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="navbar bg-base-100 border-base-300 border-b shadow-sm">
      <Link to="/" className="flex-1">
        <span className="btn btn-ghost text-primary text-xl font-bold">
          Event Scheduler
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />

        <Link to="create" className="btn btn-sm btn-outline btn-primary">
          Create Event
        </Link>

        {user ? (
          <>
            <span className="text-base-content/60 hidden text-sm font-medium md:inline">
              {user.email}
            </span>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={signOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="signin" className="btn btn-sm btn-primary">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
