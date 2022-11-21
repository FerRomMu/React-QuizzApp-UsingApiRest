import { createContext, useState } from "react";

const QuizzContext = createContext({})
export default QuizzContext

export const QuizzProvider = ({ children }) => {
    const [quizz, setQuizzContext] = useState({});

    return (
        <QuizzContext.Provider value={{ quizz, setQuizzContext }}>
            {children}
        </QuizzContext.Provider>
    )
}
