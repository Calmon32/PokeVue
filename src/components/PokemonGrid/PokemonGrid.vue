
// PokemonGrid.vue

<template>
    <div>
        <keep-alive>
            <component :is="currentComponent" v-bind="currentProps"></component>
        </keep-alive>
    </div>
</template>

<script>
import ListView from "./ListView.vue";
import PokemonView from "./PokemonView.vue";

import { RepositoryFactory } from "../../api/RepositoryFactory";
const PokemonRepository = RepositoryFactory.get("pokemon");

export default {
    components: {
        ListView,
        PokemonView
    },
    data: function () {
        return {
            isLoading: false,
            currentComponent: 'ListView',
            pokemon: [],
            selectedPokemon: null,
            offset: 0,
            scrollPosition: 0
        };
    },
    mounted() {
        console.log("Fetching");
        this.FetchPokemon();
        this.LoadOnScroll();
    },
    computed: {
        currentProps: function() {
            if (this.currentComponent === 'PokemonView') {
                return { pokemon: this.selectedPokemon, deselect: this.DeselectPokemon }
            } else {
                return { pokemonList: this.pokemon, select: this.SelectPokemon }
            }
        }
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
                    document.documentElement.offsetHeight - 1000;

                if (bottomOfWindow) {
                    this.FetchPokemon();
                }
            };
        },
        async SelectPokemon(id) {
            this.scrollPosition = this.$el.scrollHeight;
            console.log(`Selected: ${id}`);
            console.log(this.scrollPosition);
            const { data } = await PokemonRepository.getPokemon(id);
            this.selectedPokemon = data;
            this.currentComponent = 'PokemonView';
        },
        DeselectPokemon() {
            this.selectedPokemon = null;
            this.currentComponent = 'ListView';
        }
    }
};
</script>

<style>
</style>