import { connect } from 'react-redux';

const NumInput = props => {
    return (
        <section>
            <h3>How many questions would you like to answer?</h3>
            <input value={props.numQuestions} onChange={props.inputChange} type='text' ></input>
            <button onClick={props.buttonClick}>Start</button>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        numQuestions: state.numQuestions,
        showQuestions: state.showQuestions
    }
}

export default connect(mapStateToProps)(NumInput)
