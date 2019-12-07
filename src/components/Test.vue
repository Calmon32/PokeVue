<template>
    <div>
        <h1>TEST PAGE: {{ id }}</h1>
        <router-link to="/" class="btn btn-light">Back</router-link>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number
        }
    }
};
</script>

<style>
</style>