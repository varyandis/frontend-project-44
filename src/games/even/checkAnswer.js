import { defaultAnswer } from './const.js'

const checkAnswer = (number, answer) => {
  const numberEven = defaultAnswer.yes
  const numberOdd = defaultAnswer.no
  const isNumberEven = (number % 2 === 0) ? numberEven : numberOdd
  const isCurrentAnswer = (isNumberEven === answer)

  return {
    isCorrect: isCurrentAnswer,
    correctAnswer: isNumberEven,
  }
}

export default checkAnswer
