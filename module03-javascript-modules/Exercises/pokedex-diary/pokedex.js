// Helpers shared idea (duplicated here )
// FR005: Core Web APIs Usage - DOM API
function el(tag, classes, text) {
  const e = document.createElement(tag);
  if (classes) e.className = classes;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}
// FR005: Core Web APIs Usage - Web Storage API (localStorage)
function getPokedex() {
  try {
    const raw = localStorage.getItem('pokedex_diary');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
// FR005: Core Web APIs Usage - Web Storage API (localStorage)
function savePokedex(list) {
  localStorage.setItem('pokedex_diary', JSON.stringify(list));
}
function statList(stats) {
  const ul = el('ul', 'text-sm text-slate-700 space-y-1');
  const show = ['hp', 'attack', 'defense'];
  for (const s of stats) {
    if (show.includes(s.name)) {
      const li = el('li');
      const label = el('span', 'font-medium capitalize', `${s.name}: `);
      const value = el('span', 'tabular-nums', String(s.base));
      li.appendChild(label);
      li.appendChild(value);
      ul.appendChild(li);
    }
  }
  return ul;
}

const dexEl = document.getElementById('dex');
const emptyEl = document.getElementById('empty');

// FR013: Pokédex Page Display - Display caught Pokémon with image, name, stats
// FR014: Personal Notes - Allow adding notes to each Pokémon
function noteCard(pokemon, onSaveNote, onRemove) {
  const card = el(
    'article',
    'rounded-lg border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-3',
  );

  const header = el('div', 'flex items-center gap-3');
  const img = el('img', 'w-16 h-16 object-contain');
  img.src = pokemon.image;
  img.alt = pokemon.name;

  const title = el('h3', 'text-lg font-semibold capitalize', `${pokemon.name} (#${pokemon.id})`);
  header.appendChild(img);
  header.appendChild(title);

  const stats = statList(pokemon.stats);

  const label = el('label', 'text-sm font-medium', 'Personal Notes');
  const textarea = el('textarea', 'w-full rounded border border-slate-300 px-3 py-2 text-sm');
  textarea.value = pokemon.notes || '';

  const buttonContainer = el('div', 'flex gap-2');

  // FR014: Personal Notes - Save note functionality
  const saveBtn = el('button', 'rounded bg-blue-600 text-white px-3 py-2');
  saveBtn.textContent = 'Save Note';
  saveBtn.addEventListener('click', () => {
    onSaveNote(pokemon.id, textarea.value);
    // Small success hint
    saveBtn.textContent = 'Saved ✔';
    setTimeout(() => (saveBtn.textContent = 'Save Note'), 1000);
  });

  // Additional functionality: Remove Pokémon from Pokédex
  const removeBtn = el('button', 'rounded bg-red-600 text-white px-3 py-2');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    if (confirm(`Are you sure you want to remove ${pokemon.name} from your Pokédex?`)) {
      onRemove(pokemon.id);
    }
  });

  buttonContainer.appendChild(saveBtn);
  buttonContainer.appendChild(removeBtn);

  card.appendChild(header);
  card.appendChild(stats);
  card.appendChild(label);
  card.appendChild(textarea);
  card.appendChild(buttonContainer);
  return card;
}

// FR013: Pokédex Page Display - Render the Pokédex page with caught Pokémon
function renderDex() {
  const list = getPokedex();
  // Empty state
  if (!list.length) {
    emptyEl.classList.remove('hidden');
  } else {
    emptyEl.classList.add('hidden');
  }

  // Clear and render
  while (dexEl.firstChild) dexEl.removeChild(dexEl.firstChild);

  for (const p of list) {
    const card = noteCard(
      p,
      (id, note) => {
        // FR014: Personal Notes - Persist the note on the same object in localStorage
        const all = getPokedex();
        const idx = all.findIndex(x => x.id === id);
        if (idx !== -1) {
          all[idx].notes = note;
          savePokedex(all);
        }
      },
      id => {
        // Additional functionality: Remove Pokémon from localStorage
        const all = getPokedex();
        const filtered = all.filter(x => x.id !== id);
        savePokedex(filtered);
        // Re-render the page to show updated list
        renderDex();
      },
    );
    dexEl.appendChild(card);
  }
}

// FR013: Pokédex Page Display - Initialize the Pokédex page
renderDex();
