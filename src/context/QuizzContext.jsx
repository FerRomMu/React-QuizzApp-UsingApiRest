import { createContext, useState } from "react";

const QuizzContext = createContext({})
export default QuizzContext

export const QuizzProvider = ({ children }) => {
    const [quizz, setQuizzContext] = useState({
        hasEnded: null,
        questions: null
    });

    const setQuestions = (questions) => {
        setQuizzContext({
            hasEnded: false,
            questions: questions
        })
    }

    const endQuizz = () => {
        setQuizzContext({
            hasEnded: true,
            questions: null
        })
    }

    const resetQuizz = () =>  {
        setQuizzContext({
            hasEnded: null,
            questions: null
        })
    }

    return (
        <QuizzContext.Provider value={{ quizz, resetQuizz, setQuestions, endQuizz }}>
            {children}
        </QuizzContext.Provider>
    )
}