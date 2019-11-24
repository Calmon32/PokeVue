
// RepositoryFactory.js

import PokemonRepository from "./PokemonRepository.js"

const repositories = {
    pokemon: PokemonRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}