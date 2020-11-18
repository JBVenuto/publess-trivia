import { connect } from 'react-redux';
import { changeScore } from '../actions/actions';

const ScoreBoard = (props) => {
    const handleClick = (type, team) => {
        let points = props.questions[props.currentQuestion].value
        if (type === '-') {
            points = type + points;
        }
        props.changeScore(team, points)
    }

    return (
        <div>
            <h3>Score</h3>
            <ul>
                {Object.keys(props.scores).map((key, index) => (
                    <li key={index}>
                        <h6>
                            <span onClick={e => handleClick('-', key)}>-</span>
                            {key}: {props.scores[key]}
                            <span onClick={e => handleClick('+', key)}>+</span>
                        </h6>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        scores: state.scores,
        questions: state.questions,
        currentQuestion: state.currentQuestion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeScore: (team, points) => dispatch(changeScore(team, points))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);