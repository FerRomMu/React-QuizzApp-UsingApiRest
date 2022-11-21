import { createContext, useState } from "react";

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