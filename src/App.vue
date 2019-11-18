<template>
    <div>
        <div id="app">
            <img id="logo" alt="Vue logo" src="./assets/logo2.png" />
            <ListView v-bind:pokemonList="pokemon" />
        </div>
    </div>
</template>

<script>
import ListView from "./components/ListView.vue";

import { RepositoryFactory } from "./api/RepositoryFactory";
const PokemonRepository = RepositoryFactory.get("pokemon");

export default {
    name: "app",
    components: {
        ListView
    },
    data: () => {
        return {
            isLoading: false,
            pokemon: []
        };
    },
    created() {
        this.fetchPokemon();
    },
    methods: {
        async fetchPokemon() {
            this.isLoading = true;
            const { data } = await PokemonRepository.get(0, 500);
            this.isLoading = false;
            this.pokemon = data.results.map(pokemon => {
                pokemon.id = pokemon.url.split("/").slice(-2)[0];
                pokemon.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                return pokemon;
            });
        }
    }
};
</script>

<style>
body {
    margin: 0;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#logo {
    margin: 20px;
    height: 200px;
}
</style>
