import { useContext } from "react"
import OptionQuizz from "../../componentes/atoms/Option"
import TextInfo from "../../componentes/atoms/TextInfo"
import Title from "../../componentes/atoms/Title"
import DifficultyContext from "../../context/DifficultyContext"
import QuizzContext from "../../context/QuizzContext"

const Results = () => {
    const { resetDifficultyContext } = useContext(DifficultyContext)
    const { quizz, resetQuizz } = useContext(QuizzContext)

    const getResultado = quizz.answers.map(a => a ? 1:0 ).reduce((a,b) => a+b, 0)

    return (
        <>
            <Title title="Resultado"/>
            <TextInfo text="Felicitaciones y bla"/>
            <TextInfo text={"Tu resultado es: " + getResultado + " respuestas correctas."}/>
            <OptionQuizz option="Jugar de nuevo" action={() => {resetDifficultyContext(); resetQuizz()}}/>
        </>
    )
}

export default Results