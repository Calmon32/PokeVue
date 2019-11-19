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
            pokemon: [],
            offset: 0
        };
    },
    mounted() {
        this.FetchPokemon();
        this.LoadOnScroll();
    },
    methods: {
        async FetchPokemon() {
            if (!this.isLoading) {
                this.isLoading = true;
                const { data } = await PokemonRepository.get(this.offset, 20);
                this.offset += data.results.length;
                let newPokemon = data.results.map(pokemon => {
                    pokemon.id = pokemon.url.split("/").slice(-2)[0];

                    let words = pokemon.name.split('-');
                    for (var i = 0; i < words.length; i++) {
                        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                    }
                    pokemon.name = words.join(' ')
                    
                    pokemon.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                    return pokemon;
                });
                this.pokemon = [...this.pokemon, ...newPokemon];
                this.isLoading = false;
            }
        },
        LoadOnScroll() {
            // Credit to: https://renatello.com/check-if-a-user-has-scrolled-to-the-bottom-in-vue-js/
            window.onscroll = () => {
                let bottomOfWindow =
                    Math.max(
                        window.pageYOffset,
                        document.documentElement.scrollTop,
                        document.body.scrollTop
                    ) +
                        window.innerHeight >
                    document.documentElement.offsetHeight - 500;

                if (bottomOfWindow) {
                    this.FetchPokemon();
                }
            };
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
