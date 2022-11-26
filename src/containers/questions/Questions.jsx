import Header from "../../componentes/molecules/Header"
import QuestionSection from "../../componentes/molecules/QuestionSection"
import { useQuizzActions } from "../../hooks/useQuizzActions"

const Questions = () => {

    const [ getQuestion, index, getLength, getOptions, setAnswer ] = useQuizzActions()
    const callback = (op) =>{
        setAnswer(op.option, op.id)
    }

    return (
        <>
            <Header title="Preguntas"/>
            <main>
                <QuestionSection subtitle={"Responde la pregunta (" + (index+1) + "/" + getLength + ")"} texts={ [getQuestion] }
                opts={ getOptions } callback={ callback }/>
            </main>
        </>
    )
}

export default Questions