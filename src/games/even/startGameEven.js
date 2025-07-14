import readlineSync from 'readline-sync'
import greetPlayer from '../../cli.js'
import checkAnswer from './checkAnswer.js'
import { NO, YES } from './const.js'

const startGameEven = () => {
  const maxRandomNumber = 100
  const countAttempt = 3
  const playerName = greetPlayer()

  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`)

  for (let i = 0; i < countAttempt; i++) {
    const randomNumber = Math.floor(Math.random() * maxRandomNumber + 1)
    console.log(`Question: ${randomNumber}`)
    const answerPlayer = readlineSync.question('Your answer: ')
    const { isCorrect, correctAnswer } = checkAnswer(randomNumber, answerPlayer)

    if (isCorrect) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answerPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`)

      return
    }
  }

  console.log(`Congratulations, ${playerName}!`)
}

export default startGameEven
