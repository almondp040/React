import { useState } from "react";


function ValidatedShoppingListForm({addItem}) {
    
    const [formData, setFormData] = useState({
        product: "", 
        quantity: 0
    })

    const [isProductValid, setIsProductValid] = useState(false)

    const validate = (product) =>{
    if (product.length === 0) {
        setIsProductValid(false)
    } else {
        setIsProductValid(true)
    }
}
    const handleChange = (event) => {
        const changedField = event.target.name
        const newValue = event.target.value
        if (changedField === "product") {
            validate(newValue)
        } 
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
    if (isProductValid) {
        console.log("Submitted")
        addItem(formData)
        setFormData({product: "", quantity: 0})
    }

}
    return(
        <>
        
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

            { !isProductValid && (<p style={{color: 'red'}}>Product name cannot be empty</p>)}
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

<button disabled={!isProductValid}>Add Item</button>
        </form>
        
        </>
    )
}

export default ValidatedShoppingListForm