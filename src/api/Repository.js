
// Repository.js
// Credit: https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322

import axios from "axios"

const baseDomain = "https://pokeapi.co"
const baseURL = `${baseDomain}/api/v2/`

export default axios.create({
    baseURL
})