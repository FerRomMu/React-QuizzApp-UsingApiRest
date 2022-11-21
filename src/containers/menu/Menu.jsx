import { useContext } from "react"
import OptionQuizz from "../../componentes/atoms/Option"
import Subtitle from "../../componentes/atoms/Subtitle"
import TextInfo from "../../componentes/atoms/TextInfo"
import Title from "../../componentes/atoms/Title"
import DifficultyContext from "../../context/DifficultyContext"

const Menu = () => {
    const tempOp = ["facil", "medio", "dificil"]
    const { setDifficultyContext } = useContext(DifficultyContext)
    return (
        <>
            <Title title="Dificultad"/>
            <Subtitle subtitle="Elige dificultad"/>
            <TextInfo text="Elige una dificultad para empezar a jugar."/>
            { tempOp.map( op => <OptionQuizz option={op} action={ () => setDifficultyContext(op) }/>)}
        </>
    )
}

export default Menu