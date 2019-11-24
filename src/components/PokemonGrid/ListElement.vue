
// ListElement.vue

<template>
    <div @click="select(pokemon.id)" class="pokemonCard">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.imageURL" alt />
    </div>
</template>

<script>
export default {
    name: "ListElement",
    props: {
        pokemon: Object,
        select: Function
    },
    data: () => {
        return {};
    }
};
</script>

<style scoped>
.pokemonCard {
    border-radius: 7px;
    background-color: #e9e9e9;
    width: 200px;
    padding: 10px;
    margin: auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.pokemonCard:hover {
    background-color: rgb(165, 235, 203);
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #2c3e50;
}
</style>