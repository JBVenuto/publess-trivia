import { useState } from 'react';
import { connect } from 'react-redux';
import { nextQuestion, reset } from '../actions/actions';
import styles from '../styles/questions.module.scss'

const Questions = props => {
    const [viewAnswer, toggleAnswer] = useState(false)
    const nextQ = () => {
        props.nextQuestion();
        toggleAnswer(false);
    }
    const question = props.questions[props.currentQuestion];

    return (
        <section className={styles.questions}>
            <i><h4>{question.category.title}</h4></i>
            <h4>{question.question}</h4>
            {!viewAnswer ?
                <button className="col s2 offset-s2 btn indigo darken-4" onClick={e => toggleAnswer(true)}>Answer</button> :
                <div className="row">
                    <h5 className="col s12 m10" style={{ padding: 0 }}>{question.answer}</h5>
                    {props.currentQuestion === props.questions.length - 1 ?
                        <button className="col s3 m2 btn indigo darken-4" onClick={e => props.reset()}>Finish</button> :
                        <button className="col s3 m2 btn indigo darken-4" onClick={nextQ}>Next Question</button>
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