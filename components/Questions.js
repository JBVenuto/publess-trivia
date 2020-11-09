import { useState } from 'react';
import { connect } from 'react-redux';
import { nextQuestion, reset } from '../actions/actions';

const Questions = props => {
    const [viewAnswer, toggleAnswer] = useState(false)
    const nextQ = () => {
        props.nextQuestion();
        toggleAnswer(false);
    }
    const question = props.questions[props.currentQuestion];

    return (
        <section>
            <h3>{question.category.title}</h3>
            <h2>{question.question}</h2>
            {!viewAnswer ?
                <button onClick={e => toggleAnswer(true)}>Answer</button> :
                <div>
                    <h3>{question.answer}</h3>
                    {props.currentQuestion === props.questions.length - 1 ?
                        <button onClick={e => props.reset()}>Finish</button> :
                        <button onClick={nextQ}>Next Question</button>
                    }
                </div>
            }

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        showQuestions: state.showQuestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextQuestion: () => dispatch(nextQuestion()),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);