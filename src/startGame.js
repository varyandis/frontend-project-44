import greetPlayer from './cli.js'
import { countAttempt } from './const.js'
import readlineSync from 'readline-sync'

export const startGame = (description, generateRound) => {
  const playerName = greetPlayer()

  console.log(description)

  for (let i = 0; i < countAttempt; i++) {
    const { question, correctAnswer } = generateRound()

    console.log(`Question: ${question}`)

    const answerPlayer = readlineSync.question('Your answer: ')
    const isCorrect = correctAnswer === answerPlayer

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
