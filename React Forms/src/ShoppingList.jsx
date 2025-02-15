import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from 'uuid'
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([
    {   id: uuid(), 
        product: "Bananas", 
        quantity: 8
    }

    ])

    const addItem = (item) =>{
        
        setItems(currentItems =>{
            return [...currentItems, {...item, id: uuid()}]
        })
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {
               items.map((i) => (<li key={i.id}>{i.product} - {i.quantity}</li>))
                }
            </ul>

            <ValidatedShoppingListForm addItem={addItem}/>
            
        </div>
    )
}

export default ShoppingList
