
import './App.css';
import Die from './Die';
import Dice from './Dice';
import LuckyN from './LuckyN';

function App() {

  return (
    <>
      <LuckyN numDice={2} goal={7} />
      <LuckyN numDice={4} goal={12} />
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[3, 6, 2, 3, 4, 5, 1]} color="red" />
      <Dice dice={[3, 6, 1]} />
 */}

      {/* <Die val={2} />
      <Die val={2} /> */}
      {/* <h1>State Demo</h1> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper /> */}
      {/* <ScoreKeeper2 numPlayers={10} target={4} /> */}
      {/* <Counter /> */}
      {/* <Dumbo /> */}
    </>
  );

}

export default App

