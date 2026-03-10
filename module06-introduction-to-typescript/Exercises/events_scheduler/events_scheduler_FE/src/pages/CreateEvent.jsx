import { useActionState } from "react";
import { Navigate } from "react-router-dom";

import { createEvent } from "../data";

const CreateEvent = () => {
  const createEventAction = async (_prevState, formData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const location = formData.get("location");

    // Validation
    if (!title || !description || !date || !location) {
      return {
        error: "Please fill in all fields",
        success: false,
        eventId: null,
      };
    }

    try {
      const newEvent = await createEvent({
        title,
        description,
        date,
        location,
      });
      return { error: null, success: true, eventId: newEvent.id };
    } catch (err) {
      return {
        error: err.message || "Failed to create event",
        success: false,
        eventId: null,
      };
    }
  };

  const [state, formAction, isPending] = useActionState(createEventAction, {
    error: null,
    success: false,
    eventId: null,
  });

  if (state.success && state.eventId) {
    return <Navigate to={`/event/${state.eventId}`} />;
  }

  return (
    <main className="my-8 px-4">
      <div className="bg-base-100 border-base-300 mx-auto max-w-2xl rounded-lg border p-8 shadow-lg">
        <h2 className="text-primary mb-8 text-center text-3xl font-bold">
          Create New Event
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
            {isPending ? "Creating Event..." : "Create New Event"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateEvent;
