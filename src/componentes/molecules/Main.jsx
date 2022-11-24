import OptionQuizz from "../atoms/Option"
import Subtitle from "../atoms/Subtitle"
import TextInfo from "../atoms/TextInfo"

const Main = ( { subtitle, texts, opts, callback } ) => {

    return (
        <main>
            <Subtitle subtitle={ subtitle }/>
            { texts?.map( text => <TextInfo text={ text }/>) }
            { opts?.map( op => <OptionQuizz option={ op.option? op.option : op } action={ () => callback(op) }/>) }
        </main>
    )
}

export default Main