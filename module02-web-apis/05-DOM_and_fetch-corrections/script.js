const pokmeonContainer = document.getElementById("pokmeon-container");

fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  .then((response) => {
    //   console.log(response);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.results.map((pokemon) => {
      //   console.log(pokemon.name);
      displayPokemon(pokemon);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//   function that handles DOM maipulation
function displayPokemon(pokemon) {
  const pokeminListItem = document.createElement("li");
  pokeminListItem.textContent = pokemon.name;
  pokmeonContainer.appendChild(pokeminListItem);
}
