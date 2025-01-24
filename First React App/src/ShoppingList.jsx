import ShoppingListItem from "./ShoppingListItem"

function ShoppingList({items}) {
    
    return (
        <ul>
            { items.map((item)=> 
            
<ShoppingListItem
key={item.id} 
item={item.item} 
quantity={item.quantity} 
completed={item.completed}
//Short hand way
// {...item}
/>
)

            }
        </ul>
    )
}

export default ShoppingList