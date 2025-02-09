# How We Should Structure Our React Apps
    - Introducing the Lucky 7 Dice Game! 
    - Helps us structure our applications to make them easier to understand

- Formulating Our Component Gameplan!
    - We can make a Component Hierarchy
    - We are unable to pass State upward, only down

- State Design Principle 
    - Lift state as high as needed, but no higher

- Decoupling Logic from presentation
    - Generally, aim to have components be one of 2 types: 
        - Presentational: Doesn't have state; is primarily about appearance/UI
        - Logical: Has state or related logic; isn't about a specific UI

- State as Props 
    - Passing State down as props via the LuckyN component
    - Data flows down and NOT up, this applies to functions as well. 

- Passing Functions as Props
    - Making functions as utility functions to be used in our Components
    - We can pass functons as props in our components, view LuckyN as an example
    - In JS, functions are first class objects - you can pass them around!! 
    - View LuckyN as an example 

- Passing Functions that Update State
    - We can pass functions that use state from one function as a prop to another function. See LuckyN Button and Roll as an example

- How Data Flows
    - This Shows a common pattern in React: 
        - A parent component defines a function
        - The function is passed as a prop to a child component 
        - The child component invokes the prop function
        - The parent function is called, usually setting new state
        - The parent component is re-rendered along with its children 
