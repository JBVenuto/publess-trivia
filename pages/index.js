import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NumInput from '../components/NumInput';
import Questions from '../components/Questions';
// import getQuestions from './api/questionsApi';
import { connect } from 'react-redux';

const Home = props => {
  // const [numQuestions, setNumQuestions] = useState(0);
  // const [questions, setQuestions] = useState([{category: {title: ''}, question: 'LOADING...', answer: ''}]);
  // const [currentQuestion, nextQuestion] = useState(0);
  // const [showQuestions, toggleQuestions] = useState(false);

  // async function apiCall() {
  //   const questions = await getQuestions(numQuestions);
  //   setQuestions(questions);
  // }

  // const reset = () => {
  //   toggleQuestions(false);
  //   setNumQuestions(0);
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Publess Trivia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!props.showQuestions ?
          <NumInput />
          // <NumInput
          //   value={props.numQuestions}
          //   inputChange={e => setNumQuestions(e.target.value)}
          //   buttonClick={e => {
          //     toggleQuestions(true);
          //     apiCall();
          //   }}
          // />
          :
          <Questions />
          // <Questions
          //   category={props.questions[currentQuestion].category.title}
          //   question={props.questions[currentQuestion].question}
          //   answer={props.questions[currentQuestion].answer}
          //   buttonClick={e => nextQuestion(currentQuestion + 1)}
          //   currentQuestion={props.currentQuestion}
          //   lastQuestion={props.questions.length - 1}
          // />
        }
      </main>
    </div>
  )
  // }
}

const mapStateToProps = (state) => {
  return {
    numQuestions: state.numQuestions,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    showQuestions: state.showQuestions
  }
}

export default connect(mapStateToProps)(Home)