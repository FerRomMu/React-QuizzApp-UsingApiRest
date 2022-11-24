import OptionQuizz from "../../componentes/atoms/Option"
import Subtitle from "../../componentes/atoms/Subtitle"
import TextInfo from "../../componentes/atoms/TextInfo"
import Header from "../../componentes/molecules/Header"
import { useQuizzActions } from "../../hooks/useQuizzActions"

const Questions = () => {

    const [ getQuestion, index, getLength, getOptions, setAnswer ] = useQuizzActions()

    return (
        <>
            <Header title="Preguntas"/>
            <Subtitle subtitle={"Responde la pregunta (" + (index+1) + "/" + getLength + ")"}/>
            <TextInfo text={getQuestion}/>
            { getOptions.map( ({option: op, id }) => <OptionQuizz option={op} action={ () => setAnswer(op, id) }/>)}
        </>
    )
}

export default Questions