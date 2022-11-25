import Header from "../../componentes/molecules/Header"
import Main from "../../componentes/molecules/Main"
import { useQuizzActions } from "../../hooks/useQuizzActions"

const Questions = () => {

    const [ getQuestion, index, getLength, getOptions, setAnswer ] = useQuizzActions()
    const callback = (op) =>{
        setAnswer(op.option, op.id)
    }

    return (
        <>
            <Header title="Preguntas"/>
            <Main subtitle={"Responde la pregunta (" + (index+1) + "/" + getLength + ")"} texts={ [getQuestion] } 
                opts={ getOptions } callback={ callback }/>
        </>
    )
}

export default Questions