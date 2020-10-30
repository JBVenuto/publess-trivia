const Questions = props => (
    <section>
        <div>{props.question}</div>
        {props.currentQuestion === props.lastQuestion ?
            <button>Finish</button> :
            <button onClick={props.buttonClick}>Next Question</button>
        }
    </section>
)

export default Questions;