import { useState } from 'react';
import { connect } from 'react-redux';

const Questions = props => {
    const [viewAnswer, toggleAnswer] = useState(false)
    const nextQ = () => {
        // props.buttonClick();
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

const mapStateToProps = (state) => {
    return {
      numQuestions: state.numQuestions,
      questions: state.questions,
      currentQuestion: state.currentQuestion,
      showQuestions: state.showQuestions
    }
  }

export default connect(mapStateToProps)(Questions);