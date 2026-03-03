import { useEffect, useState } from "react";

export default function SimpleEffect() {
  // State for the loaded person data
  const [people, setPeople] = useState(null);

  // Current URL for the API call - if this changes, a new fetch is triggered
  const [url, setUrl] = useState("https://swapi.tech/api/people");

  // URLs for pagination (page forward/back)
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  // Loading status to show spinner/loading text
  const [loading, setLoading] = useState(true);

  // Error status to show error messages
  const [error, setError] = useState(null);

  // useEffect is executed when 'url' changes (dependency array: [url])
  useEffect(() => {
    // Async function inside useEffect (useEffect itself cannot be async)
    const fetchData = async (url) => {
      try {
        setLoading(true); // Activate loading status
        // ? [QUESTION] Why do we set loading to true at the beginning?
        const res = await fetch(url); // Execute API call

        // Check if request was successful (Status 200-299)
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json(); // Convert response to JSON
        console.log(data);

        // Update state with new data
        setPeople(data.results);
        setNextUrl(data.next); // URL for next page
        setPrevUrl(data.previous); // URL for previous page
      } catch (err) {
        // On errors: set error state
        setError(err.message);
      } finally {
        // Always executed (regardless of success or error)
        setLoading(false);
      }
    };

    fetchData(url); // Call fetch function
  }, [url]); // Dependency Array: Effect runs only when 'url' changes

  // Handlers for pagination buttons
  const handlePrev = () => setUrl(prevUrl); // Change URL -> triggers useEffect
  const handleNext = () => setUrl(nextUrl); // Change URL -> triggers useEffect

  return (
    <main className="min-h-screen bg-gray-900 p-8 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-300">
        Star Wars Characters | Fetch on State Change
      </h1>

      {/* Pagination Buttons - only show if URLs are available */}
      <div className="flex justify-center gap-4 pt-6">
        {prevUrl && (
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      {/* Conditional rendering based on loading/error state */}
      {loading && (
        <p className="text-center font-medium text-gray-600">Loading...</p>
      )}

      {error && (
        <p className="text-center font-semibold text-red-500">
          Sorry, try again :(
        </p>
      )}

      {/* List of characters - only render if people is available */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {people?.map((person) => (
          <li
            key={person.uid}
            className="rounded bg-white p-4 text-center capitalize shadow"
          >
            <span className="font-semibold text-gray-800">{person.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
