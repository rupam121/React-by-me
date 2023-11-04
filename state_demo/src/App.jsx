
import './App.css';
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import ScoreKeeper2 from './ScoreKeeper2';

function App() {

  return (
    <>
      {/* <h1>State Demo</h1> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper /> */}
      <ScoreKeeper2 numPlayers={10} target={4} />
      {/* <Counter /> */}
      {/* <Dumbo /> */}
    </>
  );

}

export default App

