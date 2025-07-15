import { maxRandomNumber } from '../../const.js'
import { operation } from './const.js'

export const generateRound = () => {
  const randomNumberX = Math.floor(Math.random() * maxRandomNumber + 1)
  const randomNumberY = Math.floor(Math.random() * maxRandomNumber + 1)
  const randomIndex = Math.floor(Math.random() * operation.length)
  const randomOperation = operation[randomIndex]
  const question = `${randomNumberX} ${randomOperation} ${randomNumberY}`

  let correctAnswer = 0
  switch (randomOperation) {
    case '-':
      correctAnswer = randomNumberX - randomNumberY
      break
    case '+':
      correctAnswer = randomNumberX + randomNumberY
      break
    case '*':
      correctAnswer = randomNumberX * randomNumberY
      break
  }

  return {
    question: question,
    correctAnswer: String(correctAnswer),
  }
}
