import axios from "axios"

const baseDomain = "https://pokeapi.co"
const baseURL = `${baseDomain}/api/v2/`

export default axios.create({
    baseURL
})