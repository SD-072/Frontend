const pokemonContainer = document.getElementById("pokemon-container");

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      // catching body: null, {}
      if (!data) {
        return;
      }
      displayPokemon(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

//   function that handles DOM maipulation
function displayPokemon(pokemon) {
  const pokemonCard = document.createElement("div");

  pokemonCard.classList.add("shadow-md", "p-4", "m-2", "flex", "flex-col", "items-center");

  // # img
  const pokemonImg = document.createElement("img");
  //   pokemonImg.setAttribute("src", pokemon.sprites.front_default);
  pokemonImg.src = pokemon.sprites.front_default;
  //   pokemonImg.className = "mb-4";
  //   pokemonImg.className += " pb-1";
  pokemonImg.classList.add("mb-2");

  // # Name
  const pokemonName = document.createElement("h2");
  pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonName.setAttribute("class", "text-xl font-bold text-gray-600");

  // # appending everything together
  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  pokemonContainer.appendChild(pokemonCard);
}
