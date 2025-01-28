# Notes for our React Shopping List and Rental Property Exercise!

- Configuring ESLint
    -prop types allows us to define types for our props, and is a package, and we can use this to specify prop types
    - Use this to turn it off: "react/prop-types": "off",

- Prop types library Crash Course
    - Vite automatically uses proptypes so we would just need to import it!
                    ShoppingListItem.propTypes = {
                        item: PropTypes.string, 
                        quantity: PropTypes.number, 
                        completed: PropTypes.bool

                                                                        }
    - Useful to add a layer of security to our components that way our code does not break when wrong data is inserted! 

