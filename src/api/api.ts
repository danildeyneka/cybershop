import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://midi-polydactyl-rainbow.glitch.me/'
})