import { useState } from "react";

function ShoppingListForm({addItem}) {
    
    const [formData, setFormData] = useState([{
        product: "", 
        quantity: 0
    }])

    const handleChange = (event) => {
        const changedField = event.target.name
        const newValue = event.target.value
        
        setFormData(currentValue => {
            return {
                ...currentValue, 
                [changedField]:newValue
            }
        })
    }

const submitForm = () =>{
    console.log(formData)
}

const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("Submitted")
    addItem(formData)
}
    return(
        <>
        <h1>Product is: {formData.product} and Quantity is: {formData.quantity}</h1>
        <form onSubmit={handleSubmit}>
            {/* product input */}
            <label htmlFor="product">Product</label>
            <input 
            type="text" 
            placeholder="Product Name"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            />
        {/* quantity input */}
        <label htmlFor="quantity">Quantity</label>
            <input 
            type="number"
            placeholder="Quantity"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            />

<button>Add Item</button>
        </form>
        
        </>
    )
}

export default ShoppingListForm