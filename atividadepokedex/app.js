document.addEventListener("DOMContentLoaded", function() {
  const pokedex = document.querySelector('.pokedex');

  const fetchPokemon = async () => {
      try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
          const data = await response.json();
          const pokemons = data.results;
          pokemons.forEach(async (pokemon) => {
              const response = await fetch(pokemon.url);
              const pokemonData = await response.json();
              displayPokemon(pokemonData);
          });
      } catch (error) {
          console.log('Error fetching Pokemon:', error);
      }
  };

  const displayPokemon = (pokemon) => {
      const card = document.createElement('li');
      card.classList.add('card');

      const name = pokemon.name;
      const imageUrl = pokemon.sprites.front_default;

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = name;
      img.classList.add('card-image');

      const title = document.createElement('h2');
      title.textContent = name;
      title.classList.add('card-title');

      const subtitle = document.createElement('p');
      subtitle.classList.add('card-subtitle');

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(subtitle);

      pokedex.appendChild(card);
  };

  fetchPokemon();
});