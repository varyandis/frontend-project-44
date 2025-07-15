import { startGame } from '../../startGame.js'
import { descriptions } from '../../const.js'
import { generateRound } from './generateRound.js'

const startGameProgression = () => {
  const description = descriptions.gameProgression
  startGame(description, generateRound)
}

export default startGameProgression
