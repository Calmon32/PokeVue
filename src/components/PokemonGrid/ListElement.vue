
// ListElement.vue

<template>
    <div @click="select(pokemon.id)" class="card bg-light text-center">
        <div class="card-header">
            <img class="pokeImg" :src="pokemon.imageURL" alt />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ pokemon.name }}</h5>
            </div>
    </div>
</template>

<script>
export default {
    name: "ListElement",
    props: {
        pokemon: Object,
        select: Function
    }
};
</script>

<style scoped>
.card {
    border-radius: 7px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.11);
}
.card:hover {
    background-color: rgb(165, 235, 203);
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #2c3e50;
}

.pokeImg {
    height: 100%;
    margin: auto;
}

.card-header {
    text-align: center;
}
</style>