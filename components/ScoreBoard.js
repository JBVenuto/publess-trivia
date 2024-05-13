import { connect } from 'react-redux';
import { changeScore } from '../actions/actions';
import styles from '../styles/scoreboard.module.scss';

const ScoreBoard = (props) => {
    const handleClick = (type, team) => {
        let points = props.questions[props.currentQuestion].difficulty
        if (type === '-') {
            points = type + points;
        }
        props.changeScore(team, points)
    }

    return (
        <div className={styles.scores}>
            <h3>Score</h3>
            <ul>
                {Object.keys(props.scores).map((key, index) => (
                    <li key={index}>
                        <h6>
                            <b className="indigo darken-4 white-text" onClick={e => handleClick('-', key)}>-</b>
                            {key}: {props.scores[key]}
                            <b className="indigo darken-4 white-text" onClick={e => handleClick('+', key)}>+</b>
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