import { maxRandomNumber } from '../../const.js'

export const generateRound = () => {
  const randomNumberX = Math.floor(Math.random() * maxRandomNumber + 1)
  const randomNumberY = Math.floor(Math.random() * maxRandomNumber + 1)
  const question = `${randomNumberX} ${randomNumberY}`

  let numA = randomNumberX
  let numB = randomNumberY

  while (numB !== 0) {
    const temp = numB
    numB = numA % numB
    numA = temp
  }

  return {
    question: question,
    correctAnswer: String(numA),
  }
}
