import { connect } from "react-redux";
import {
  updateNumQuestions,
  viewQuestions,
  getQuestions,
  toggleKeepScore,
} from "../actions/actions";
import questionsApi from "../pages/api/questionsApi";
import styles from "../styles/numInput.module.scss";
import AddTeams from "./AddTeams";

const NumInput = (props) => {
  async function handleClick(e) {
    if (props.numQuestions > 0) {
      const questions = await questionsApi(props.numQuestions);
      props.getQuestions(questions);
      props.viewQuestions();
    } else {
      alert("Number of questions must be greater than zero");
    }
  }

  return (
    <section className={styles.numInput}>
      <h3>How many questions would you like to answer?</h3>
      <form className="row">
        <input
          className="col s2 offset-s3"
          value={props.numQuestions}
          onChange={(e) => props.updateNumQuestions(e.target.value)}
          type="text"
        ></input>
        <button
          className="col s3 offset-s1 btn indigo darken-4"
          type="button"
          onClick={(e) => handleClick(e)}
        >
          Start
        </button>
      </form>
      <label>
        <input
          name="keepScore"
          type="checkbox"
          checked={props.keepScore}
          onChange={(e) => props.toggleKeepScore()}
        />
        <span>Keep score</span>
      </label>
      {props.keepScore ? <AddTeams /> : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    numQuestions: state.numQuestions,
    showQuestions: state.showQuestions,
    keepScore: state.keepScore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNumQuestions: (numQuestions) =>
      dispatch(updateNumQuestions(numQuestions)),
    viewQuestions: () => dispatch(viewQuestions()),
    getQuestions: (questions) => dispatch(getQuestions(questions)),
    toggleKeepScore: () => dispatch(toggleKeepScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumInput);
