// Definindo o deslocamento (offset) inicial para a consulta à API.
const offset = 0;

// Definindo o limite de resultados por consulta à API.
const limit = 10;

// Construindo a URL da API usando template literals para inserir os valores de offset e limit.
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


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
fetch(url)
    .then((response) => response.json()) // Convertendo a resposta para formato JSON.
    .then((jsonBody) => jsonBody.results) // Extraindo a lista de resultados do JSON.
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon);
        }


    })
    .catch((error) => console.error(error)); // Capturando e exibindo erros, caso ocorram.
