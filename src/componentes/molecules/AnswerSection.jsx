const AnswerSection = ( { result } ) => {

    return (
        <section className={ result? "correctSection" : "incorrectSection" }>
            <h2 className="resultMsg">{ result? "Correct!" : "Oops... Incorrect" }</h2>
        </section>
    )
}

export default AnswerSection