import OptionQuizz from "../../componentes/atoms/Option"
import Subtitle from "../../componentes/atoms/Subtitle"
import TextInfo from "../../componentes/atoms/TextInfo"
import Title from "../../componentes/atoms/Title"
import { useQuizzActions } from "../../hooks/useQuizzActions"

const Questions = () => {

    const [ getQuestion, index, getLength, getOptions, checkAnswer ] = useQuizzActions()

    return (
        <>
            <Title title="Preguntas"/>
            <Subtitle subtitle={"Responde la pregunta (" + (index+1) + "/" + getLength + ")"}/>
            <TextInfo text={getQuestion}/>
            { getOptions.map( op => <OptionQuizz option={op} action={ () => checkAnswer(op) }/>)}
        </>
    )
}

export default Questions