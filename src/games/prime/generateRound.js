import { maxRandomNumber, NO, YES } from '../../const.js'

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }

  return true
}

export const generateRound = () => {
  const question = Math.floor(Math.random() * maxRandomNumber + 1)
  const correctAnswer = isPrime(question) ? YES : NO

  return {
    question,
    correctAnswer,
  }
}
