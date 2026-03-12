import { useEffect, useState } from "react";

import EventCard from "../components/EventCard";
import { getAllEvents } from "../data";

const Home = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const events = await getAllEvents();
        setAllEvents(events);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load events");
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="mx-auto my-8 max-w-screen-2xl px-4">
      <h1 className="text-primary mb-8 text-center text-4xl font-bold">
        All Events
      </h1>

      {loading && (
        <div className="flex min-h-[50vh] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {error && (
        <div className="alert alert-error mx-auto max-w-md">
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && (
        <div className="auto-cols-max justify-items-center gap-12">
          {allEvents.length === 0 ? (
            <p className="text-base-content/60 text-center">No events found</p>
          ) : (
            allEvents.map((event) => <EventCard key={event.id} event={event} />)
          )}
        </div>
      )}
    </main>
  );
};

export default Home;
