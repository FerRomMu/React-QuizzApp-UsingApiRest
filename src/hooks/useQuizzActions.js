import { useContext, useEffect, useState } from "react"
import { getQuestionsByDifficulty, postAnswer } from "../api/api"
import DifficultyContext from "../context/DifficultyContext"
import QuizzContext from "../context/QuizzContext"

/** Provee de las siguientes funciones:
 * getQuestion: Devuelve la pregunta actual.
 * index: Devuelve el indice de la pregunta actual.
 * getLength: Devuelve el número de preguntas.
 * getOptions: Devuelve las opciones de la pregunta actual.
 * setAnswer: Asigna la respuesta dada a la pregunta actual, guardando el resultado y pasando a la siguiente pregunta si la hay, 
 *            de otra forma marca el quizz como terminado.
 * lastResult: Devuelve el resultado de la última respuesta dada. */
export const useQuizzActions = () => {

    const { difficulty } = useContext(DifficultyContext)
    const [getQuestions, setQuestions] = useState([])
    useEffect(() => {
        getQuestionsByDifficulty(difficulty)
        .then(result => setQuestions(result))
        .catch(e => setQuestions([
            { question: "An unexpected error has ocurred. Try to reload the page." }
        ]))
    }, [])

    const [lastResult, setResult] = useState()
    const [index, setIndex] = useState(0)
    const actualQuestion = getQuestions[index]
    const { endQuizz, pushAnswer } = useContext(QuizzContext)
    
    const checkAnswer = async (op, id) => {
        const body = {
            questionId: id,
            option: op
        }
        const result = await postAnswer(body)
        return result.answer
    }

    const setAnswer = async (op, id) => {
        let result = await checkAnswer(optionToString(op), id)
        setResult(result)
        pushAnswer(result)
        if(index < getLength-1){
            setIndex(index+1)
        } else {
            setIndex(0)
            endQuizz()
        }
    }
    
    const optionToString = (op) => {
        switch (op) {
            case getOptions[0].option: return 'option1'
            case getOptions[1].option: return 'option2'
            case getOptions[2].option: return 'option3'
            case getOptions[3].option: return 'option4'
            default: throw Error("A maximium of 4 options was expected but more were find.")
        }
    }

    const getLength = getQuestions.length
    const getOptions = actualQuestion?.option1? [
        { option: actualQuestion.option1, id: actualQuestion.id },
        { option: actualQuestion.option2, id: actualQuestion.id },
        { option: actualQuestion.option3, id: actualQuestion.id },
        { option: actualQuestion.option4, id: actualQuestion.id }
    ] : []
    const getQuestion = actualQuestion?.question? actualQuestion.question : 'Loading..'

    return [getQuestion, index, getLength, getOptions, setAnswer, lastResult]
}