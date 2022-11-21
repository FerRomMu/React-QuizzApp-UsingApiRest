const OptionQuizz = ({ option, action }) => {
    return (
        <button onClick={ action }>
            { option }
        </button>
    )
}

export default OptionQuizz