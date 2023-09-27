
import PropTypes from "prop-types";

function ShopingListItem({ item, quantity, completed }) {
    const styles = {
        color: completed ? "greay" : "red",
        textDecoration: completed ? "line-through" : "none"
    };

    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    );
}
ShopingListItem.PropTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
};

export default ShopingListItem;