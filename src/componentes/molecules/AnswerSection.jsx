import Subtitle from "../atoms/Subtitle"
import TextInfo from "../atoms/TextInfo"

const AnswerSection = ( { result } ) => {

    return (
        <section className={ result? "correctSection" : "incorrectSection" }>
            <Subtitle subtitle={ result? "Correct!" : "Oops... Incorrect" }/>
        </section>
    )
}

export default AnswerSection