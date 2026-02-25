// FR007–FR012 (Home page).

// --- Config and constants ---
const API_KEY = '??????????'; // TMDB v3 API key
const API_BASE = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const LS_KEY = 'movieDiary.favourites';

// --- In-memory cache of the last fetched movies (by id) for easy "Add" ---
const lastResultsById = {};

// --- LocalStorage helpers (very small & readable) ---
function getFaves() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
}
function setFaves(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}
function addFave(movie) {
  const faves = getFaves();
  const isAlreadySaved = faves.some(m => m.id === movie.id);
  if (!isAlreadySaved) {
    // Note starts empty here; can be edited on the journal page
    faves.push({ ...movie, note: '' });
    setFaves(faves);
    return true;
  }
  return false;
}

// --- Small render helpers ---
function yearOf(dateStr) {
  return dateStr ? new Date(dateStr).getFullYear() : '—';
}
function createCard(movie) {
  const article = document.createElement('article');
  article.className = 'border rounded overflow-hidden bg-white';

  const media = document.createElement('div');
  media.className = 'aspect-[2/3] bg-gray-100';
  if (movie.poster_path) {
    const img = document.createElement('img');
    img.src = `${IMG_BASE}${movie.poster_path}`;
    img.alt = movie.title || '';
    img.className = 'w-full h-full object-cover';
    media.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'w-full h-full flex items-center justify-center text-gray-500';
    placeholder.textContent = 'No image';
    media.appendChild(placeholder);
  }

  const body = document.createElement('div');
  body.className = 'p-2';

  const title = document.createElement('h3');
  title.className = 'font-semibold';
  title.textContent = movie.title || '';

  const meta = document.createElement('p');
  meta.className = 'text-xs text-gray-600';
  const rating = Number.isFinite(movie.vote_average) ? movie.vote_average.toFixed(1) : '—';
  meta.textContent = `Year ${yearOf(movie.release_date)} • ★ ${rating}`;

  const btn = document.createElement('button');
  btn.dataset.add = String(movie.id);
  btn.className = 'mt-2 w-full px-3 py-1.5 text-sm rounded bg-indigo-600 text-white';
  btn.textContent = 'Add to favourites';

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(btn);

  article.appendChild(media);
  article.appendChild(body);
  return article;
}

// --- DOM refs ---
const grid = document.getElementById('grid');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchDialog = document.getElementById('searchDialog');
const searchResults = document.getElementById('searchResults');

// --- Load popular movies (FR009) ---
async function loadPopular() {
  grid.textContent = '';
  const loading = document.createElement('p');
  loading.className = 'text-gray-600';
  loading.textContent = 'Loading…';
  grid.appendChild(loading);
  try {
    const url = new URL(`${API_BASE}/movie/popular`);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-US');
    url.searchParams.set('page', '1');

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Failed to load popular movies');

    const data = await res.json();
    grid.textContent = '';
    (data.results || []).forEach(m => {
      lastResultsById[m.id] = m;
      grid.appendChild(createCard(m));
    });
  } catch (err) {
    grid.textContent = '';
    const p = document.createElement('p');
    p.className = 'text-red-700';
    p.textContent = 'Failed to load movies. Please try again.';
    grid.appendChild(p);
  }
}

// --- Button feedback helper ---
function flashAddFeedback(buttonEl, wasNewlyAdded) {
  const originalText = buttonEl.textContent;
  buttonEl.disabled = true;
  buttonEl.classList.remove('bg-indigo-600');
  if (wasNewlyAdded) {
    buttonEl.textContent = 'Added ✓';
    buttonEl.classList.add('bg-green-600');
  } else {
    buttonEl.textContent = 'Already in favourites';
    buttonEl.classList.add('bg-gray-600');
  }
  setTimeout(() => {
    buttonEl.classList.remove('bg-green-600', 'bg-gray-600');
    buttonEl.classList.add('bg-indigo-600');
    buttonEl.textContent = originalText;
    buttonEl.disabled = false;
  }, 1100);
}

// --- Handle Add to favourites (FR012) ---
function onAddClick(e) {
  const button = e.target.closest('button');
  const id = button?.dataset?.add;
  if (!id) return;
  const movie = lastResultsById[Number(id)];
  if (!movie) return;
  const wasNewlyAdded = addFave(movie);
  flashAddFeedback(button, wasNewlyAdded);
}

grid.addEventListener('click', onAddClick);
// Support Add buttons inside the Search dialog as well
searchResults.addEventListener('click', onAddClick);

// --- Search with dialog (FR010) ---
searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const q = searchInput.value.trim();
  if (!q) return;

  // Open the dialog and show simple feedback/result list
  if (typeof searchDialog.showModal === 'function') searchDialog.showModal();
  searchResults.textContent = '';
  const searching = document.createElement('p');
  searching.className = 'text-gray-600';
  searching.textContent = 'Searching…';
  searchResults.appendChild(searching);

  try {
    const url = new URL(`${API_BASE}/search/movie`);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-US');
    url.searchParams.set('query', q);
    url.searchParams.set('include_adult', 'false');
    url.searchParams.set('page', '1');

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Search request failed');

    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      searchResults.textContent = '';
      const p = document.createElement('p');
      p.className = 'text-gray-600';
      p.textContent = 'No results found.';
      searchResults.appendChild(p);
      return;
    }
    // Cache these for Add buttons too
    data.results.forEach(m => {
      lastResultsById[m.id] = m;
    });
    searchResults.textContent = '';
    const wrap = document.createElement('div');
    wrap.className = 'grid grid-cols-2 sm:grid-cols-3 gap-3';
    data.results.forEach(m => {
      wrap.appendChild(createCard(m));
    });
    searchResults.appendChild(wrap);
  } catch {
    searchResults.textContent = '';
    const p = document.createElement('p');
    p.className = 'text-red-700';
    p.textContent = 'Search failed. Try again.';
    searchResults.appendChild(p);
  }
});

// --- Init ---
loadPopular();
