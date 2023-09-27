export default function Die({ numside }) {
    console.log(numside);
    const roll = Math.floor(Math.random() * numside )+1;
    return <h1>{ numside}-sided die roll: { roll }</h1>
}