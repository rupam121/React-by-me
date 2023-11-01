import { useState } from "react";

export default function Counter() {
    console.log("RENDERED");
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }
    const addThree = () => {
        setCount(count + 1);
        console.log(count);
        setCount(count + 1);
        setCount(count + 1);
    }
    const addToTen = () => {
        setCount(10);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={addToTen}>SetToTen</button>
        </div>
    );
}