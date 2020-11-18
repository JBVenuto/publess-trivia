import { connect } from 'react-redux';
import { changeScore } from '../actions/actions';
import { useState } from 'react';

const ScoreBoard = (props) => {
    const handleClick = (type, team) => {
        alert(`${type}${points} to ${team}`);
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
                        <span onClick={e => handleClick('-', key)}>-</span>
                        {key}: {props.scores[key]}
                        <span onClick={e => handleClick('+', key)}>+</span>
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
        changeScore: (team) => dispatch(changeScore(team, points))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);