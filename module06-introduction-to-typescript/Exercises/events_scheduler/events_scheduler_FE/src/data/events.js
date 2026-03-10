/**
 * EVENTS API FUNCTIONS
 *
 * All functions for fetching events.
 * Notice the pattern: each function handles one specific task.
 * This is called "Single Responsibility Principle" - makes testing easier!
 */

const API_URL = "http://localhost:3001/api/events";

/**
 * Get All Events
 *
 * Fetches the list of all events (public, no auth needed)
 *
 * @returns {Array} - Array of event objects
 * @throws {Error} - If request fails
 */
export const getAllEvents = async () => {
  // Simple GET request (default method)
  const res = await fetch(API_URL);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to fetch events");
  }

  const data = await res.json();
  return data.results; // Backend returns { results: [...] }
};

/**
 * Get Single Event by ID
 *
 * Fetches detailed information about one specific event
 *
 * @param {string} id - The event ID
 * @returns {Object} - Event object
 * @throws {Error} - If event not found or request fails
 */
export const getEventById = async (id) => {
  // Dynamic URL: /api/events/123
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to fetch event");
  }

  const data = await res.json();
  return data;
};

// # Create event / POST
export const createEvent = async (eventData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to create event");
  }

  const data = await res.json();
  return data;
};

// # updating an event / PUT
export const updateEvent = async (id, eventData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to update event");
  }

  const data = await res.json();
  return data;
};
