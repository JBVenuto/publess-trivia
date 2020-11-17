import { connect } from 'react-redux';
import { addTeam } from '../actions/actions';
import { useState } from 'react';

const AddTeams = (props) => {
    const [teamName, setTeamName] = useState('');

    const handleClick = e => {
        e.preventDefault()
        props.addTeam(teamName)
        setTeamName('')
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Team Name" value={teamName} onChange={e => setTeamName(e.target.value)}></input>
                <button onClick={e => handleClick(e)}>Add</button>
            </form>
            <ul>
                {Object.keys(props.scores).map((key, index) => <li key={index}>{key}</li>)}
            </ul>
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
        addTeam: (team) => dispatch(addTeam(team))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeams);