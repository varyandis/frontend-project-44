import { maxRandomNumber } from '../../const.js'
import { defaultAnswer } from './const.js'

export const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * maxRandomNumber + 1)

  const question = `${randomNumber}`
  const numberEven = defaultAnswer.yes
  const numberOdd = defaultAnswer.no
  const correctAnswer = (randomNumber % 2 === 0) ? numberEven : numberOdd

  return {
    question: question,
    correctAnswer: String(correctAnswer),
  }
}
