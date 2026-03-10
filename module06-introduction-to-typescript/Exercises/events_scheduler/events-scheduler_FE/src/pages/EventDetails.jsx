import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { useAuth } from "../context/userContext";
import { getEventById } from "../data";

const EventDetails = () => {
  const { eventID } = useParams();
  const { user } = useAuth();

  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const event = await getEventById(eventID);
        setEventDetails(event);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load event");
        console.error("Failed to fetch event:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventID]);

  if (loading) {
    return (
      <main className="mx-auto my-8 max-w-4xl px-4">
        <div className="flex min-h-[50vh] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto my-8 max-w-4xl px-4">
        <div className="alert alert-error mx-auto max-w-md">
          <span>{error}</span>
        </div>
      </main>
    );
  }

  if (!eventDetails) {
    return (
      <main className="mx-auto my-8 max-w-4xl px-4">
        <p className="text-base-content/60 text-center">Event not found</p>
      </main>
    );
  }

  const formattedDate = new Date(eventDetails.date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    },
  );

  const canEdit = user && Number(user.id) === Number(eventDetails.organizerId);

  return (
    <main className="mx-auto my-8 max-w-4xl px-4">
      <div className="bg-base-100 border-base-300 rounded-lg border p-8 shadow-lg">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h1 className="text-primary text-4xl font-bold">
            {eventDetails.title}
          </h1>
          {canEdit && (
            <Link
              to={`/event/${eventID}/edit`}
              className="btn btn-outline btn-primary"
            >
              Edit Event
            </Link>
          )}
        </div>
        <p className="text-accent mb-6 text-lg font-semibold">
          {formattedDate}
        </p>
        <div className="text-base-content/70 my-4 flex gap-2">
          <svg
            aria-hidden="true"
            className="fill-secondary h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <span className="font-medium">{eventDetails.location}</span>
        </div>
        <div className="border-base-300 mt-6 border-t pt-6">
          <p className="text-base-content leading-relaxed">
            {eventDetails.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default EventDetails;
