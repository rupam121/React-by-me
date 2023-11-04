import { useState } from "react";

export default function ScoreKeeper() {
    const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });
    function increseP1Score() {

        setScore((oldScore) => {
            return { ...oldScore, p1Score: oldScore.p1Score + 1 };
        });
    }
    function increseP2Score() {
        score.p2Score += 1;
        setScore(score);
    }
    return (
        <div>
            <p>Player 1:{score.p1Score}</p>
            <p>Player 2:{score.p2Score}</p>
            <button onClick={increseP1Score}>1 PLayer 1</button>
            <button onClick={increseP2Score}>1 PLayer 2</button>
        </div>
    );
}