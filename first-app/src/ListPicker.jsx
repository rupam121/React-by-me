
export default function ListPicker({ value }){
    const randIdx = Math.floor(Math.random() * value.length);
    const randEle = value[randIdx];
    return (
        <div>
            <p>The List picker of vakues : {value}  </p>
            <p>Randhom element is: { randEle }</p>
        </div>
)
}
