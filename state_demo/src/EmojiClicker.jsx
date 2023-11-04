import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji() {
    const choices = ["😊", "🥲", "🥹", "👽", "😢", "🤞"];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
    const [emoji, setEmoji] = useState([{ id: uuid(), emoji: randomEmoji() }]);

    const addEmoji = () => {
        setEmoji((oldEmoji) => [...oldEmoji, { id: uuid(), emoji: randomEmoji() }]);
    };

    const deleteEmoji = (id) => {
        //  delete the emoji with the specified ;
        setEmoji((prevEmoji) => {
            return prevEmoji.filter((e) => e.id !== id);
        });
    }

    const makeEverythingAHeart = () => {
        setEmoji((prevEmoji) => {
            return prevEmoji.map((e) => {
                return { ...e, emoji: "💗" };
            });
        });
    };

    return (
        < div >
            {emoji.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}> {e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add-Emoji</button>
            {/* <button onClick={makeEverythingAHeart}>Make them hearts</button> */}
        </div >
    );
}

[1, 2, 3, 4, 5, 6, 7].filter((e) => 2 % 2 == 0);