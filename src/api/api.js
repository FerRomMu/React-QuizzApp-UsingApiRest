import axios from "axios";
import { useContext, useEffect } from "react";
import DifficultyContext from "../context/DifficultyContext";

const url = 'https://preguntados-api.vercel.app/api'

export const getDifficulty = async () => {
    const result = await axios.get(url + '/difficulty')
        .then(result => result.data)
        .catch(e => console.log(e))
    return result
}

export const getQuestionsByDifficulty = async (difficulty) => {
    const result = await axios.get(url + '/questions?difficulty=' + difficulty)
        .then(result => result.data)
        .catch(e => console.log(e))
    return result
}

export const postAnswer = async (body) => {
    const result = await axios.post(url + '/answer', body)
        .then(result => result.data)
        .catch(e => console.log(e))
    return result
}