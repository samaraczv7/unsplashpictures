import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 68abca7b143e80303c2e52128265e569a16bb3acfcaae083a125eb71db4acf62'}


});