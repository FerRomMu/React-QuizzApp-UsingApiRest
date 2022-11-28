import { useContext } from "react"
import Header from "../../componentes/molecules/Header"
import QuestionSection from "../../componentes/molecules/QuestionSection"
import DifficultyContext from "../../context/DifficultyContext"
import QuizzContext from "../../context/QuizzContext"

const Results = () => {
    const { resetDifficultyContext } = useContext(DifficultyContext)
    const { quizz, resetQuizz } = useContext(QuizzContext)

    const getResultado = quizz.answers.map(a => a ? 1:0 ).reduce((a,b) => a+b, 0)
    const callback = () => { resetDifficultyContext(); resetQuizz() }
    return (
        <>
            <Header title="RESULT"/>
            <main>
                <QuestionSection subtitle={"Your final result"} 
                texts={ [
                    "Congratulations you have completed the quizz. Let's see how you did it!",
                    "Your result is: " + getResultado + " correct answers."
                ] }
                opts={ ["Play Again"] } callback={ callback }/>
            </main>
        </>
    )
}

export default Results