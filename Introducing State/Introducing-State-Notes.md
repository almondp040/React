# Introducing State in React
    -React Concepts
        - Components are the building blocks of react. Combination of logic and presentation
        -Props is data passed to a component, Immutable
        -State is data specific to an instance of a component and is able to change
        -Anytime we have data that we would like to change inside of a component we would involve state!

    -What goes in state?
        -Data fetched from an API
        -Form Information
        -A variable that "decides" whether something is showing or hidden
        -Ask yourself: Will this ever change? If so it should go in state somewhere!

    -Using State
        -We create state using the useState hook: const [count, setCount] = useState(0)
        -This returns an array containing 2 elements: 
            -The piece of state itself
            -A function to change the piece of state
        -You must call useState INSIDE a component

    -React Hooks
        -Functions from react that can be used inside of an component, they all come with React
        -See the Counter file for an example of useState

    -Multiple pieces of state inside of a component
        -You can have multiple useState() inside of the same function
        -See ToggleCounter.jsx as an example

    -useState() and rendering 
        -The entire component is re-rendered whenever a function is ran
        -React is smart enough to know the value and add memory to the useState function and will remember the original value in the useState function
        -So if useState(5), then React will remember the 5. 

    -ColorBox Example for 1/30!