import { connect } from 'react-redux';
import { reset, nextRound } from '../actions/actions';
import styles from '../styles/finalscore.module.scss';

const FinalScore = (props) => {

    return (
        <div class={styles.final_score}>
            <h3>Score</h3>
            <ul>
                {Object.keys(props.scores).map((key, index) => (
                    <li key={index}>
                        <h6>
                            {key}: {props.scores[key]}
                        </h6>
                    </li>
                ))}
            </ul>
            <button className="col s3 m2 btn indigo darken-4" onClick={e => props.reset()}>Finish</button>
            <button className="col s3 m2 btn indigo darken-4" onClick={e => props.nextRound()}>Next  Round</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        scores: state.scores
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset()),
        nextRound: () => dispatch(nextRound())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore);