// FR013–FR014 (Journal page).
// Lists favourites and lets you add a personal note per movie (stored on the same object).

const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const LS_KEY = 'movieDiary.favourites';

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
function removeFave(id) {
  const list = getFaves().filter(m => m.id !== id);
  setFaves(list);
}
function saveNote(id, text) {
  const list = getFaves();
  const idx = list.findIndex(m => m.id === id);
  if (idx !== -1) {
    list[idx].note = text;
    setFaves(list);
  }
}

function yearOf(dateStr) {
  return dateStr ? new Date(dateStr).getFullYear() : '—';
}

function createCard(m) {
  const article = document.createElement('article');
  article.className = 'border rounded overflow-hidden bg-white';

  const media = document.createElement('div');
  media.className = 'aspect-[2/3] bg-gray-100';
  if (m.poster_path) {
    const img = document.createElement('img');
    img.src = `${IMG_BASE}${m.poster_path}`;
    img.alt = m.title || '';
    img.className = 'w-full h-full object-cover';
    media.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'w-full h-full flex items-center justify-center text-gray-500';
    placeholder.textContent = 'No image';
    media.appendChild(placeholder);
  }

  const body = document.createElement('div');
  body.className = 'p-3';

  const title = document.createElement('h3');
  title.className = 'font-semibold';
  title.textContent = m.title || '';

  const meta = document.createElement('p');
  meta.className = 'text-xs text-gray-600';
  const rating = Number.isFinite(m.vote_average) ? m.vote_average.toFixed(1) : '—';
  meta.textContent = `Year ${yearOf(m.release_date)} • ★ ${rating}`;

  const label = document.createElement('label');
  label.className = 'block text-sm font-medium mt-2';
  label.textContent = 'Personal Note';

  const textarea = document.createElement('textarea');
  textarea.dataset.note = String(m.id);
  textarea.className = 'w-full mt-1 px-3 py-2 border rounded';
  textarea.placeholder = 'Write your thoughts…';
  textarea.value = m.note ?? '';

  const saveBtn = document.createElement('button');
  saveBtn.dataset.save = String(m.id);
  saveBtn.className = 'mt-2 w-full px-3 py-1.5 text-sm rounded bg-indigo-600 text-white';
  saveBtn.textContent = 'Save Note';

  const removeBtn = document.createElement('button');
  removeBtn.dataset.remove = String(m.id);
  removeBtn.className = 'mt-2 w-full px-3 py-1.5 text-sm rounded bg-red-600 text-white';
  removeBtn.textContent = 'Remove from favourites';

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(label);
  body.appendChild(textarea);
  body.appendChild(saveBtn);
  body.appendChild(removeBtn);

  article.appendChild(media);
  article.appendChild(body);
  return article;
}

const grid = document.getElementById('journalGrid');
const empty = document.getElementById('empty');

function render() {
  const list = getFaves();
  grid.textContent = '';
  if (!list.length) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  list.forEach(m => {
    grid.appendChild(createCard(m));
  });
}

grid.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  const removeId = btn.dataset.remove;
  if (removeId) {
    const ok = confirm('Remove this movie from favourites?');
    if (!ok) return;
    removeFave(Number(removeId));
    render();
    return;
  }

  const saveId = btn.dataset.save;
  if (saveId) {
    const ta = grid.querySelector(`textarea[data-note="${saveId}"]`);
    saveNote(Number(saveId), ta?.value ?? '');
  }
});

render();
