import { maxRandomNumber, NO, YES } from '../../const.js'

const isPrime = (num) => {
  if (num < 2 || num % 2 === 0) {
    return false
  }
  else if (num === 2) {
    return true
  }
  else if (num > 3) {
    for (let i = 3; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
  }
  return true
}

export const generateRound = () => {
  const question = Math.floor(Math.random() * maxRandomNumber + 1)
  let correctAnswer = isPrime(question) ? YES : NO

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}
