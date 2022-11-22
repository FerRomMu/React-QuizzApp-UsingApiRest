import { useContext, useEffect, useState } from "react"
import { getQuestionsByDifficulty } from "../api/api"
import DifficultyContext from "../context/DifficultyContext"
import QuizzContext from "../context/QuizzContext"

export const useQuizzActions = () => {

    const { difficulty } = useContext(DifficultyContext)
    const [getQuestions, setQuestions] = useState([])
    useEffect(() => {
        getQuestionsByDifficulty(difficulty)
        .then(result => setQuestions(result))
    }, [])
    
    const [index, setIndex] = useState(0)
    const { endQuizz, pushAnswer } = useContext(QuizzContext)
    const checkAnswer = (op) => { return "opcion 1" === op }
    
    const setAnswer = (op) => {
        pushAnswer(checkAnswer(op))
        if(index < getLength-1){
            setIndex(index+1)
        } else {
            setIndex(0)
            endQuizz()
        }
    }
    
    const getLength = getQuestions.length
    const getOptions = getQuestions[index]?.option1? [getQuestions[index].option1, getQuestions[index].option2, getQuestions[index].option3, getQuestions[index].option4] : []
    const getQuestion = getQuestions[index]?.question? getQuestions[index].question : 'Cargando'
    
    return [getQuestion, index, getLength, getOptions, setAnswer]
}



