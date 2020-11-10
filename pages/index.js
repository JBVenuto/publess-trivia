import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NumInput from '../components/NumInput';
import Questions from '../components/Questions';
import { connect } from 'react-redux';

const Home = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Publess Trivia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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