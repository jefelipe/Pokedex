

const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    // Construindo a URL da API usando template literals para inserir os valores de offset e limit.
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json()) // Convertendo a resposta para formato JSON.
        .then((jsonBody) => jsonBody.results) // Extraindo a lista de resultados do JSON.
        .catch((error) => console.error(error))
}