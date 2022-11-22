import axios from "axios";
import { useContext, useEffect } from "react";
import DifficultyContext from "../context/DifficultyContext";

const url = 'https://preguntados-api.vercel.app/api'

export const getDifficulty = (setData) => {
    axios.get(url + '/difficulty')
    .then( result => setData(result.data) )
    .catch( e => console.log("oops... an unexpected error has ocurred."))
}

export const getQuestionsByDifficulty = async (difficulty) => {
    const result = await axios.get(url + '/questions?difficulty=' + difficulty)
    .then( result => result.data )
    .catch( e => console.log(e))
    return result
}