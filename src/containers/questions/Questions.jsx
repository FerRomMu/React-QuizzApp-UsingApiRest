import { useContext, useState } from "react"
import OptionQuizz from "../../componentes/atoms/Option"
import Subtitle from "../../componentes/atoms/Subtitle"
import TextInfo from "../../componentes/atoms/TextInfo"
import Title from "../../componentes/atoms/Title"
import QuizzContext from "../../context/QuizzContext"

const Questions = () => {
    const preguntas = ["pregunta 1", "pregunta 2", "pregunta 3"]
    const tempOp = ["opcion 1", "opcion 2"]
    const [index, setIndex] = useState(0)
    const { endQuizz } = useContext(QuizzContext)

    const handleAnswer = () => {
        if(index < preguntas.length-1){
            setIndex(index+1)
        } else { 
            setIndex(0)
            endQuizz()
        }
    }

    return (
        <>
            <Title title="Preguntas"/>
            <Subtitle subtitle={"Responde la pregunta (" + (index+1) + "/" + preguntas.length + ")"}/>
            <TextInfo text={preguntas[index]}/>
            { tempOp.map( op => <OptionQuizz option={op} action={ () => handleAnswer() }/>)}
        </>
    )
}

export default Questions