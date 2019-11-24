
// ListView.vue

<template>
    <div>
        <div id="grid-container">
            <ListElement v-for="(pokemon, index) in pokemonList" v-bind:key="index" :pokemon="pokemon" :select="select" />
        </div>
    </div>
</template>

<script>
import ListElement from "./ListElement.vue";

export default {
    name: "ListView",
    props: {
        pokemonList: Array,
        select: Function
    },
    components: {
        ListElement
    }
};
</script>

<style scoped>
#grid-container {
   display: grid;
   grid-gap: 20px;
   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
   width: 70vw;
   margin: auto;
   margin-bottom: 50px;
}
</style>