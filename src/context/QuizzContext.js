import { createContext, useState } from "react";

/** Contexto que provee de la siguiente información:
 * quizz: Un objeto que tiene una lista de las preguntas, una lista de resultados de las respuestas dadas y 
 * un booleano que indica si el quizz ya ha terminado.
 * 
 * Ademas provee los siguientes setters:
 * resetQuizz: Resetea el contexto.
 * setQuestions: Settea las preguntas del quizz.
 * endQuizz: Settea el quizz como finalizado y borra las preguntas.
 * pushAnswer: Agrega el resultado de una respuesta a la lista de resultados de respuestas.
 */
const QuizzContext = createContext({})
export default QuizzContext

export const QuizzProvider = ({ children }) => {
    const [quizz, setQuizzContext] = useState({
        hasEnded: null,
        questions: null,
        answers: []
    });

    const setQuestions = (questions) => {
        setQuizzContext({
            hasEnded: false,
            questions: questions,
            answers: []
        })
    }

    const endQuizz = () => {
        setQuizzContext({
            hasEnded: true,
            questions: null,
            answers: quizz.answers
        })
    }

    const resetQuizz = () =>  {
        setQuizzContext({
            hasEnded: null,
            questions: null,
            answers: []
        })
    }

    const pushAnswer = (value) => {
        quizz.answers.push(value)
    }

    return (
        <QuizzContext.Provider value={{ quizz, resetQuizz, setQuestions, endQuizz, pushAnswer }}>
            {children}
        </QuizzContext.Provider>
    )
}