import { useState } from "react"
import Dice from "./Dice";
import { getRolls, sum } from "./utils";
export default function LuckyN({ numDice = 2, goal = 7 }) {

    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === goal;
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>Lucky:{goal}{isWinner ? "You Win!" : ""}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>
                Re-Roll-Dice
            </button>
        </main>
    );
}