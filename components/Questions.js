import { useState } from 'react';

const Questions = props => {
    const [viewAnswer, toggleAnswer] = useState(false)
    const nextQ = () => {
        props.buttonClick();
        toggleAnswer(false);
    }

    return (
        <section>
            <h3>{props.category}</h3>
            <h2>{props.question}</h2>
            {!viewAnswer ?
                <button onClick={e => toggleAnswer(true)}>Answer</button> :
                <div>
                    <h3>{props.answer}</h3>
                    {props.currentQuestion === props.lastQuestion ?
                        <button>Finish</button> :
                        <button onClick={nextQ}>Next Question</button>
                    }
                </div>
            }

        </section>
    )
}

export default Questions;