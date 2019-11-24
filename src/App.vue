
// App.vue

<template>
    <div>
        <div id="app">
            <img id="logo" alt="Vue logo" src="./assets/logo2.png" />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
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
