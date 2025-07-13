import readlineSync from 'readline-sync';

const greetPlayer = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
}

export default greetPlayer;