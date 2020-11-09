import { connect } from 'react-redux';
import { updateNumQuestions, viewQuestions, getQuestions } from '../actions/actions';
import questionsApi from '../pages/api/questionsApi';

const NumInput = props => {
    async function handleClick(e) {
        e.preventDefault();
        props.viewQuestions();
        const questions = await questionsApi(props.numQuestions);
        console.log(questions);
        props.getQuestions(questions);
    }

    return (
        <section>
            <h3>How many questions would you like to answer?</h3>
            <form>
                <input value={props.numQuestions} onChange={e => props.updateNumQuestions(e.target.value)} type='text' ></input>
                <button onClick={e => handleClick(e)}>Start</button>
            </form>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        numQuestions: state.numQuestions,
        showQuestions: state.showQuestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNumQuestions: (numQuestions) => dispatch(updateNumQuestions(numQuestions)),
        viewQuestions: () => dispatch(viewQuestions()),
        getQuestions: (questions) => dispatch(getQuestions(questions))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumInput)
