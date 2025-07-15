import { countStepProgression, maxStep } from './const.js'
import { maxRandomNumber } from '../../const.js'

const getProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  return progression
}

export const generateRound = () => {
  const step = Math.floor(Math.random() * maxStep) + 1
  const start = Math.floor(Math.random() * maxRandomNumber)
  const progression = getProgression(start, step, countStepProgression)

  const skipElement = Math.floor(Math.random() * progression.length)
  const correctAnswer = String(progression[skipElement])
  progression[skipElement] = '..'

  const question = progression.join(' ')

  return {
    question,
    correctAnswer,
  }
}
