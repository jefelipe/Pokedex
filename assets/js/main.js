


function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              <li class="type">glass</li>
              <li class="type">poison</li>
            </ol>

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
        `;
}


const pokemonList = document.getElementById('pokemonList')

// Iniciando a requisição fetch para a URL da API.

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML = newHtml
})




  .catch((error) => console.error(error)); // Capturando e exibindo erros, caso ocorram.
