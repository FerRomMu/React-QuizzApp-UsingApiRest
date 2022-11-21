import { useContext } from "react"
import OptionQuizz from "../../componentes/atoms/Option"
import TextInfo from "../../componentes/atoms/TextInfo"
import Title from "../../componentes/atoms/Title"
import DifficultyContext from "../../context/DifficultyContext"
import QuizzContext from "../../context/QuizzContext"

const Results = () => {
    const { resetDifficultyContext } = useContext(DifficultyContext)
    const { resetQuizz } = useContext(QuizzContext)

    return (
        <>
            <Title title="Resultado"/>
            <TextInfo text="Felicitaciones y bla"/>
            <OptionQuizz option="Jugar de nuevo" action={() => {resetDifficultyContext(); resetQuizz()}}/>
        </>
    )
}

export default Results