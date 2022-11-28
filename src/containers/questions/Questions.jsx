import { useState } from "react"
import AnswerSection from "../../componentes/molecules/AnswerSection"
import Header from "../../componentes/molecules/Header"
import QuestionSection from "../../componentes/molecules/QuestionSection"
import { useQuizzActions } from "../../hooks/useQuizzActions"

const Questions = () => {

    const [ getQuestion, index, getLength, getOptions, setAnswer, lastResult ] = useQuizzActions()
    const [ onQuestion, setStatus] = useState(true)

    const callback = async (op) =>{
        await setAnswer(op.option, op.id)
        setStatus(false)
        setTimeout(() => setStatus(true), 1000)
    }

    return (
        <>
            <Header title="QUESTIONS"/>
            <main>
                { onQuestion?
                    <QuestionSection subtitle={"Answer the question (" + (index+1) + "/" + getLength + ")"} texts={ [getQuestion] }
                opts={ getOptions } callback={ callback }/> :
                    <AnswerSection result={ lastResult }/>
                }
            </main>
        </>
    )
}

export default Questions