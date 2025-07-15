import { startGame } from '../../startGame.js'
import { descriptions } from '../../const.js'
import { generateRound } from './generateRound.js'

const startGameGCD = () => {
  const description = descriptions.gameGCD
  startGame(description, generateRound)
}

export default startGameGCD
