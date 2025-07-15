import { startGame } from '../../startGame.js'
import { descriptions } from '../../const.js'
import { generateRound } from './generateRound.js'

const startGameCalc = () => {
  const description = descriptions.gameCalc
  startGame(description, generateRound)
}

export default startGameCalc
