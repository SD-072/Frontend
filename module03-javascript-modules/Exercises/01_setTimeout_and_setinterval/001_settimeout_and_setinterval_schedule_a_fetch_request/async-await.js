let counter = 1;

const intervalId = setInterval(() => {
  fetchPokemon();
  counter++;
  if (counter > 5) {
    clearInterval(intervalId);
  }
}, 1000);

async function fetchPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    const pokemon = {
      id: data.id,
      name: data.name,
    };
    console.log(pokemon);
  } catch (error) {
    console.error("Error fetching Pokémon data: ", error);
  }
}
