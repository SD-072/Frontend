const pokemonContainer = document.getElementById("pokemon-container");

// fetch 1 pokemon by id
const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    if (!data) {
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

// display 1 pokemon in a card
const displayPokemon = async (id) => {
  const pokemonData = await fetchPokemon(id);
  console.log(pokemonData);
  const pokemonCard = document.createElement("div");

  pokemonCard.classList.add("shadow-md", "p-4", "m-2", "flex", "flex-col", "items-center");

  // # img
  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemonData.sprites.front_default;

  // # Name
  const pokemonName = document.createElement("h2");
  pokemonName.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
  pokemonName.setAttribute("class", "text-xl font-bold text-gray-600");

  // # appending everything together
  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  pokemonContainer.appendChild(pokemonCard);
};
displayPokemon(15);
displayPokemon(1);
displayPokemon(2);
displayPokemon(18);
