import { useState } from 'react';
import { connect } from 'react-redux';
import { nextQuestion, reset } from '../actions/actions';
import styles from '../styles/questions.module.scss';
import removeTags from '../lib/removeTags';
import ScoreBoard from './ScoreBoard';

const Questions = props => {
    const [viewAnswer, toggleAnswer] = useState(false)
    const nextQ = () => {
        props.nextQuestion();
        toggleAnswer(false);
    }
    const currentQuestion = props.questions[props.currentQuestion];
    const category = removeTags(currentQuestion.category.title);
    const question = removeTags(currentQuestion.question);
    const answer = removeTags(currentQuestion.answer);
    const questionClass = props.keepScore ? 
        "col m9" : 
        "col m12"

    return (
        <section className={styles.questions}>
            <div className="row">
                <div className={questionClass}>
                    <i><h4>{category}</h4></i>
                    {props.keepScore ?
                        <i><h5>Points: {currentQuestion.value}</h5></i> :
                        null
                    }
                    <h4>{question}</h4>
                    {!viewAnswer ?
                        <button className="col s4 m2 btn indigo darken-4" onClick={e => toggleAnswer(true)}>Answer</button> :
                        <div className={styles.questions_answer + " row"}>
                            <h5 className="col s12 m10" style={{ padding: 0 }}>{answer}</h5>
                            {props.currentQuestion === props.questions.length - 1 ?
                                <button className="col s3 m2 btn indigo darken-4" onClick={e => props.reset()}>Finish</button> :
                                <button className="col s3 m2 btn indigo darken-4" onClick={nextQ}>Next Question</button>
                            }
                        </div>
                    }
                </div>
                {props.keepScore ? 
                    <div className="col s12 m3"><ScoreBoard /></div> : 
                    null
                }
            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        showQuestions: state.showQuestions,
        keepScore: state.keepScore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextQuestion: () => dispatch(nextQuestion()),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);