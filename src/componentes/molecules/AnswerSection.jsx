import Subtitle from "../atoms/Subtitle"
import TextInfo from "../atoms/TextInfo"

const AnswerSection = ( { result } ) => {

    const resultString = result? "correcta, ¡Sigue así!" : "incorrecta."

    return (
        <section>
            <Subtitle subtitle={ result? "Correcto!" : "Oops... Incorrecto" }/>
            <TextInfo text={ "La respuesta fue " + resultString }/>
        </section>
    )
}

export default AnswerSection