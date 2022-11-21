import axios from "axios";

const url = 'https://preguntados-api.vercel.app/api'

export const getDifficulty = (setData) => {
    axios.get(url + '/difficulty')
    .then( result => setData(result.data) )
    .catch( e => console.log("oops... an unexpected error has ocurred."))
}