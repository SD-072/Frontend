// ========== Small Helpers ==========
// FR005: Core Web APIs Usage - Web Storage API (localStorage)
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

function alreadyCaught(id) {
  return getPokedex().some(p => p.id === id);
}

// ========== Fetching  ==========
// FR005: Core Web APIs Usage - Fetch API
async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} while fetching ${url}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err; // rethrow to show feedback in UI
  }
}

// FR010: Search with Dialog - Fetch Pokémon by name or ID
async function getPokemonByNameOrId(nameOrId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${String(nameOrId).toLowerCase()}`;
  const data = await fetchJSON(url);
  return mapPokemon(data);
}

// FR009: Fetch Pokémon List - Fetch and display list of Pokémon
async function getPokemonList(limit = 12, offset = 0) {
  const list = await fetchJSON(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  // Fetch detail for each to get image + stats
  const details = [];
  for (const item of list.results) {
    try {
      const d = await fetchJSON(item.url);
      details.push(mapPokemon(d));
    } catch {
      // Skip failed entries but continue loading others
    }
  }
  return details;
}

function mapPokemon(data) {
  const img =
    data.sprites?.other?.['official-artwork']?.front_default || data.sprites?.front_default || '';

  return {
    id: data.id,
    name: data.name,
    image: img,
    stats: data.stats.map(s => ({
      name: s.stat.name, // e.g. "hp", "attack"
      base: s.base_stat,
    })),
    notes: '', // user note (filled on Pokédex page)
  };
}

// ========== UI Builders ==========
// FR005: Core Web APIs Usage - DOM API
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

// FR011: Pokémon Cards - Display each Pokémon's image, name, and stats in a card
function pokemonCard(pokemon, onCatch) {
  const card = el(
    'article',
    'rounded-lg border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-3',
  );

  const img = el('img', 'w-28 h-28 object-contain self-center');
  img.src = pokemon.image;
  img.alt = pokemon.name;

  const title = el('h3', 'text-lg font-semibold capitalize', `${pokemon.name} (#${pokemon.id})`);

  const stats = statList(pokemon.stats);

  // FR012: Catch'em! - "Catch" button stores the Pokémon as an object in localStorage
  const btn = el('button', 'mt-auto self-start rounded bg-emerald-600 text-white px-3 py-2');
  btn.textContent = alreadyCaught(pokemon.id) ? 'Caught ✔' : 'Catch';
  btn.disabled = alreadyCaught(pokemon.id);

  btn.addEventListener('click', () => {
    if (onCatch) onCatch(pokemon, btn);
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(stats);
  card.appendChild(btn);
  return card;
}

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

// ========== Page Logic ==========
const listEl = document.getElementById('list');
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const dialog = document.getElementById('result-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = document.getElementById('dialog-close');

dialogClose.addEventListener('click', () => dialog.close());

function openDialogContent(node) {
  clearNode(dialogContent);
  dialogContent.appendChild(node);
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    // Very old browser fallback:
    alert('Dialog not supported. See console / page content instead.');
  }
}

// FR012: Catch'em! - Handle catching Pokémon and storing in localStorage
function handleCatch(pokemon, buttonInCard) {
  const pokedex = getPokedex();
  if (!pokedex.some(p => p.id === pokemon.id)) {
    pokedex.push(pokemon);
    savePokedex(pokedex);
  }
  if (buttonInCard) {
    buttonInCard.textContent = 'Caught ✔';
    buttonInCard.disabled = true;
  }
}

// FR009: Fetch Pokémon List - Load initial list on page load
(async function init() {
  try {
    const items = await getPokemonList(12, 0);
    clearNode(listEl);
    for (const p of items) {
      const card = pokemonCard(p, handleCatch);
      listEl.appendChild(card);
    }
  } catch (err) {
    const box = el('div', 'rounded border border-red-300 bg-red-50 p-3 text-red-800');
    box.appendChild(el('p', null, 'Failed to load Pokémon. Please try again.'));
    listEl.appendChild(box);
  }
})();

// FR010: Search with Dialog - Search functionality with dialog display
form.addEventListener('submit', async e => {
  e.preventDefault();
  const term = input.value.trim();
  if (!term) return;

  try {
    const p = await getPokemonByNameOrId(term);
    const card = pokemonCard(p, pokemon => {
      handleCatch(pokemon);
      // Also reflect immediately in dialog button
      // Rebuild the card to update its button state:
      openDialogContent(pokemonCard(pokemon, handleCatch));
    });
    openDialogContent(card);
  } catch {
    const notFound = el(
      'div',
      'space-y-2',
      // textContent must be plain—add elements separately
    );
    notFound.appendChild(el('p', 'font-medium', 'No Pokémon found.'));
    notFound.appendChild(
      el(
        'p',
        'text-sm text-slate-600',
        'Try a different name (e.g., "bulbasaur") or an ID (e.g., 1).',
      ),
    );
    openDialogContent(notFound);
  }
});
