// Common Patterns for Updating Arrays in State!
// All examples DO NOT change the array, but it instead makes a copy of the array
const shoppingCart = [
    {id: 1, product: "HDMI Cable", price: 4}, 
    {id: 2, product: "Easy Bake Oven", price: 28}, 
    {id: 3, product: "Peach Pie", price: 6.5}, 
]; 

//Adding to an Array using the Spread Operator:
[...shoppingCart, {id: 4, product: "Coffee Mug", price: 7.99}]; 

//Removing an Element from an array:
//Removes the Easy Bake Oven from the array: 
shoppingCart.filter((item)=> item.id !== 2); 

// Updating All Elements in an array: 
// Updates all product names in the array to lowercase
shoppingCart.map((item)=>{
    return {
        ...item, 
        product: item.product.toLocaleLowerCase()
    }
})

// Modify a particular element in a array
// Looks for an item with the ID of 3 then changes the price to 10.99, if there is no item with this ID return the items
shoppingCart.map((item)=>{
    if (item.id === 3) {
        return {...item, price: 10.99}
    } else {
        return item
    }
})