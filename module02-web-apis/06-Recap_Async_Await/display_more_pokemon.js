const pokemonContainer = document.getElementById("pokemon-container");

const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    if (!data) {
      return;
    }
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const displayPokemon = async () => {
  const pokemonList = await fetchPokemon();

  // Loop through each Pokemon
  for (const pokemon of pokemonList) {
    // Fetch detailed data for each Pokemon
    const response = await fetch(pokemon.url);
    const pokemonData = await response.json();

    const pokemonCard = document.createElement("div");

    pokemonCard.classList.add(
      "basis-36",
      "grow",
      "shadow-md",
      "p-2",
      "m-1",
      "flex",
      "flex-col",
      "items-center",
      "rounded-lg",
      "hover:shadow-xl",
      "transition-shadow",
    );

    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemonData.sprites.front_default;

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    pokemonName.setAttribute("class", "text-xl font-bold text-gray-600");

    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);

    pokemonContainer.appendChild(pokemonCard);
  }
};

displayPokemon();
