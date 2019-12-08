module.exports = {
    publicPath: '/PokeVue/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}