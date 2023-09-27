

export default function ColorList({ colors }) {

    // const ele = [<p>Hello</p>, <p>Bye!</p>,
    // <input type="password" />];
    // const lis =;
    return (
        <div>
            <p>Color List</p>
            {/* <p>{colors}</p> */}
            {colors.map((c) => (
                <li style={{ color: c }}>{c}</li>
            ))}
        </div>
    )
}