# TMDB Movie Diary (Vanilla JS + Tailwind)

A two‑page project that uses **The Movie Database (TMDB) API**, **DOM**, **Web Storage**, **Fetch**, and **TailwindCSS**.

## Pages

- `index.html` ↔ `js/main.js`: Homepage with navbar, popular movies, and a **search dialog**.
- `journal.html` ↔ `js/journal.js`: Favourites (journal) with notes stored in **localStorage**.

## Features mapped to requirements

**Shared**

- FR001–FR006: Use Git/PRs in your repo; DOM + Web Storage + Fetch demonstrated; Tailwind used exclusively.

**Movie Diary**

- FR007: Two pages: `index.html`/`main.js` and `journal.html`/`journal.js`.
- FR008: Navbar present on both pages.
- FR009: Homepage fetches & displays **popular movies** from TMDB.
- FR010: **Search bar** submits and shows **results/feedback in a `<dialog>`**.
- FR011: Movie **cards** show image, title, and info (year, rating, overview snippet).
- FR012: **Add to favourites** stores the movie **object** inside an **array** in `localStorage`.
- FR013: **Journal page** lists favourites from `localStorage`.
- FR014: **Personal notes** per movie; notes are persisted on the same object in `localStorage`.

## Notes

- Image base: `https://image.tmdb.org/t/p/w500`.
- API base: `https://api.themoviedb.org/3`.
- Key storage: `localStorage['tmdb_api_key']`.
- LocalStorage key: `movieDiary.favourites`.
