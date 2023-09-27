
function handeformsubmit(evt) {
    evt.preventDefault();
    console.log("SUBMIT THE FORM")
}

export default function Form() {
    return (
        <form onSubmit={handeformsubmit}>
            <button>Submit</button>
        </form>
    )
}