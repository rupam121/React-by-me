
import { useState } from "react";
import "./ColorBox.css";

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    // const randomColor = colors(idx);
    return arr[idx];
}
function ColorBox({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    const chengeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    }
    return (
        <div className="ColorBox" onClick={chengeColor} style={{ backgroundColor: color }}></div>
    );
}
export default ColorBox;