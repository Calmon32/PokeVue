import PokemonGrid from './components/PokemonGrid/PokemonGrid.vue'
import Test from './components/Test.vue'

export const routes = [
    { path: '/', component: PokemonGrid },
    { path: '/test/:id', component: Test, props: true },
];