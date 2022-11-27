import Subtitle from "../atoms/Subtitle"
import TextInfo from "../atoms/TextInfo"

const AnswerSection = ( { result } ) => {

    const resultString = result? "correct, ¡Keep it up!" : "incorrect."

    return (
        <section className={ result? "correctSection" : "incorrectSection" }>
            <Subtitle subtitle={ result? "Correct!" : "Oops... Incorrect" }/>
            <TextInfo text={ "Your answer was " + resultString }/>
        </section>
    )
}

export default AnswerSection