
function clickf() {
    console.log("clicked the button")
}

function hoverf() {
    console.log("Hover it")
}
export default function Clicker({ buttonText, message }) {
    const heandleclick = () => {
        alert(message);
    }
    return (

        <button onClick={heandleclick} >{buttonText}</button>

    );
}