
// PokemonRepository.js

import Repository from "./Repository.js"

const resource = "/pokemon"

export default {
    get(offset = 0, limit = 20) {
        return Repository.get(`${resource}/?offset=${offset}&limit=${limit}`)
    },
    getPokemon(pokeId) {
        return Repository.get(`${resource}/${pokeId}`)
    }
}
