import { startGame } from '../../startGame.js'
import { descriptions } from '../../const.js'
import { generateRound } from './generateRound.js'

const startGamePrime = () => {
  const description = descriptions.gamePrime
  startGame(description, generateRound)
}

export default startGamePrime
