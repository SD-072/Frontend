import { useCallback, useEffect, useState } from "react";

export default function FetchOnClick() {
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  // Component status as a string instead of separate booleans (less state)
  const [status, setStatus] = useState("loading"); // loading, error, success

  // useCallback: Memoized function
  // Signature like useEffect: useCallback(callback, dependencyArray)
  // - is only recreated when dependencies change
  // Empty dependency array [] = function is created only once (on mount)
  // ! [NOTE] See what happens if you remove useCallback: The linter warns about the dependency in useEffect, or if you add it without useCallback, you get an infinite loop.
  const fetchData = useCallback(async (url) => {
    try {
      setStatus("loading");
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }, []); // Empty dependency array = function is stable and never changes

  // Initial fetch on component mount
  // fetchData is now stable thanks to useCallback -> no infinite loop
  useEffect(() => {
    fetchData("https://swapi.tech/api/people");
  }, [fetchData]); // useEffect requires this dependency -> must be stabilized
  // ? [QUESTION] Why do we need to include fetchData in the dependency array here?

  // Event handlers call fetchData directly (not via state change)
  // Direct, synchronous approach instead of state-driven -> fewer re-renders
  const handlePrev = () => fetchData(prevUrl);
  const handleNext = () => fetchData(nextUrl);

  return (
    <main className="min-h-screen bg-gray-900 p-8 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-300">
        Star Wars Characters | Fetch on Click
      </h1>

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

      {/* Status-based conditional rendering (instead of multiple booleans) */}
      {status === "loading" && (
        <p className="text-center font-medium text-gray-600">Loading...</p>
      )}

      {status === "error" && (
        <p className="text-center font-semibold text-red-500">
          Sorry, try again :(
        </p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2">
        {/* Render list only on success - explicit status check */}
        {status === "success" &&
          people?.map((person) => (
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
