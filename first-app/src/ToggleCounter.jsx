import { useState } from "react";
import "./Toggler.css";

export default function TogglerCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const toggleIsCount = () => setCount(count + 2);
    return (
        <div>
            <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? "x" : "y"}</p>
            <p>{count}</p>
            <button onClick={toggleIsCount}>+</button>
        </div>
    );
}