import OptionQuizz from "../atoms/Option"
import Subtitle from "../atoms/Subtitle"
import TextInfo from "../atoms/TextInfo"

const QuestionSection = ( { subtitle, texts, opts, callback } ) => {

    return (
        <section>
            <Subtitle subtitle={ subtitle }/>
            { texts?.map( text => <TextInfo text={ text }/>) }
            <div>{ opts?.map( op => <OptionQuizz option={ op.option? op.option : op } action={ () => callback(op) }/>) }</div>
        </section>
    )
}

export default QuestionSection