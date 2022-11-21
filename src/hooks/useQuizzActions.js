import { useContext, useState } from "react"
import QuizzContext from "../context/QuizzContext"

export const useQuizzActions = () => {
    const getQuestions = ["pregunta 1", "pregunta 2", "pregunta 3"]
    const getOptions = ["opcion 1", "opcion 2"]
    const [index, setIndex] = useState(0)
    const { endQuizz, pushAnswer } = useContext(QuizzContext)
    const checkAnswer = (op) => { return "opcion 1" === op }

    const setAnswer = (op) => {
        pushAnswer(checkAnswer(op))
        if(index < getQuestions.length-1){
            setIndex(index+1)
        } else {
            setIndex(0)
            endQuizz()
        }
    }

    const getLength = getQuestions.length
    const getQuestion = getQuestions[index]
    
    return [getQuestion, index, getLength, getOptions, setAnswer]
}



