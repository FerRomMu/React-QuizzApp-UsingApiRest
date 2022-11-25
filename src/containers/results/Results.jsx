import { useContext } from "react"
import Header from "../../componentes/molecules/Header"
import Main from "../../componentes/molecules/Main"
import DifficultyContext from "../../context/DifficultyContext"
import QuizzContext from "../../context/QuizzContext"

const Results = () => {
    const { resetDifficultyContext } = useContext(DifficultyContext)
    const { quizz, resetQuizz } = useContext(QuizzContext)

    const getResultado = quizz.answers.map(a => a ? 1:0 ).reduce((a,b) => a+b, 0)
    const callback = () => { resetDifficultyContext(); resetQuizz() }
    return (
        <>
            <Header title="Resultado"/>
            <Main subtitle={"¿Como te fue?"} 
                texts={ [
                    "Felicitaciones haz completado toda las respuestas. Veamos como te fue!",
                    "Tu resultado es: " + getResultado + " respuestas correctas."
                ] } 
                opts={ ["Jugar de nuevo"] } callback={ callback }/>
        </>
    )
}

export default Results