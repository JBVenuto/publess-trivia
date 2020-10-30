import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import NumInput from '../components/NumInput';
import Questions from '../components/Questions';

export default function Home() {
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState(['what', 'who', 'when', 'where', 'how']);
  const [currentQuestion, nextQuestion] = useState(0);
  const [showQuestions, toggleQuestions] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Publess Trivia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!showQuestions ?
          <NumInput
            value={numQuestions}
            inputChange={e => setNumQuestions(e.target.value)}
            buttonClick={e => toggleQuestions(true)}
          /> :
          <Questions
            question={questions[currentQuestion]}
            buttonClick={e => nextQuestion(currentQuestion + 1)}
            currentQuestion={currentQuestion}
            lastQuestion={questions.length - 1}
          />
        }
      </main>
    </div>
  )
}
