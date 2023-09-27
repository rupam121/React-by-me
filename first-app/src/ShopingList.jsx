import ShopingListItem from "./ShopingListItem";

function ShopingList({ items }) {

    return (
        < ul >
            {items.map((i) => (
                <ShopingList
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}
                />

                // eslint-disable-next-line react/jsx-key
                // <li style={{
                //     color: i.completed ? "greay" : "red",
                //     textDecoration: i.completed ? "line-through" : "none"
                // }}>
                //     {i.item} - {i.quantity}
                // </li>
            ))}
        </ul >


    );
}

export default ShopingList;