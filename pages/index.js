import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NumInput from '../components/NumInput';
import Questions from '../components/Questions';
import { connect } from 'react-redux';

const Home = props => {
  const navStyle = {
    margin: 0,
    padding: ".5em 0"
  }

  return (
    <div>
      <Head>
        <title>Publess Trivia</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Publess Trivia</title>
        <meta name="description" content="Bring the pub to you with this socially distanced, online trivia game."></meta>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <div className="indigo darken-4">
        <div className={styles.nav}>
          <h2 className="center white-text">Publess<i className="material-icons">sports_bar</i>Trivia</h2>
        </div>
      </div>

      <main className="container">
        {!props.showQuestions ?
          <NumInput />
          :
          <Questions />
        }
      </main>
    </div>
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

export default connect(mapStateToProps)(Home)