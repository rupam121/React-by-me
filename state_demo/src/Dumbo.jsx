import { useState } from "react";
function generateGameBord() {
    console.log("MAKING THE INITIAL GAME BOARD");
    return Array(5000);
}
export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBord());
    return (
        <p onClick={() => setBoard("hello!")}>Click to Change state</p>
    );

}