import { useActionState, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { getEventById, updateEvent } from "../data";

const EditEvent = () => {
  const { eventID } = useParams();
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
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventID]);

  const editEventAction = async (_prevState, formData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const location = formData.get("location");

    if (!title || !description || !date || !location) {
      return {
        error: "Please fill in all fields",
        success: false,
      };
    }

    try {
      await updateEvent(eventID, {
        title,
        description,
        date,
        location,
      });

      return { error: null, success: true };
    } catch (err) {
      return {
        error: err.message || "Failed to update event",
        success: false,
      };
    }
  };

  const [state, formAction, isPending] = useActionState(editEventAction, {
    error: null,
    success: false,
  });

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

  if (state.success) {
    return <Navigate to={`/event/${eventID}`} />;
  }

  const formattedDate = new Date(eventDetails.date).toISOString().split("T")[0];

  return (
    <main className="my-8 px-4">
      <div className="bg-base-100 border-base-300 mx-auto max-w-2xl rounded-lg border p-8 shadow-lg">
        <h2 className="text-primary mb-8 text-center text-3xl font-bold">
          Edit Event
        </h2>
        <form className="flex flex-col gap-6" action={formAction}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Event Name <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered input-primary w-full"
              name="title"
              defaultValue={eventDetails.title}
              disabled={isPending}
              placeholder="e.g., Summer Music Festival"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Description <span className="text-error">*</span>
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered textarea-primary h-32 w-full resize-none"
              name="description"
              defaultValue={eventDetails.description}
              disabled={isPending}
              placeholder="Describe your event..."
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Date <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="date"
              className="input input-bordered input-primary w-full"
              name="date"
              defaultValue={formattedDate}
              disabled={isPending}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">
                Location <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered input-primary w-full"
              name="location"
              defaultValue={eventDetails.location}
              disabled={isPending}
              placeholder="e.g., Central Park, New York"
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
            {isPending ? "Saving Changes..." : "Save Changes"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditEvent;
