function ShoppingListItem({item, quantity, completed}) {
    const styles = {color: completed ? "red" : "yellow", textDecoration: completed ? "line-through" : "none" }
    return (
        <li style={styles}>{item} - {quantity}</li>
    )
}

export default ShoppingListItem

