import { Link } from "react-router";

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  return (
    <Link to={`event/${event.id}`}>
      <div className="card bg-base-100 border-base-300 mb-4 w-full border shadow-lg transition-all duration-200 hover:shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary font-semibold">
            {event.title}
            <div className="badge badge-accent text-accent-content text-xs">
              {formattedDate}
            </div>
          </h2>
          <div className="text-base-content/70 my-2 flex gap-2">
            <svg
              aria-hidden="true"
              className="fill-secondary h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <span className="text-sm">{event.location}</span>
          </div>
          <p className="text-base-content/70 truncate text-sm">
            {event.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
