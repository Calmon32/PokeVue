import PokemonRepository from "./pokemonRepository.js"

const repositories = {
    pokemon: PokemonRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}