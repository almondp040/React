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

- Setting State with Update Functions
    -Looking at how we update state, we will use an updater function to take the current value of the state and then update it that way 
    -Using this way we can make updates to the existing values of the state
    -See Counter2 file for an example!
    -This only matters if we are looking to use a previous version of the state

- State Initializer Functions 
    - Setting up our initial state for useState()
    - Pass in the function name WITHOUT running the function to set the initial state. 
    - See Dumbo.jsx for an example!
    - If we want the function to run every time then we pass in the function() and itll run every single time 

- When does React Re-Render? 
    - React automatically looks for comparisons to see if the stuff is different or not 

- Working with Objects in State
    -To work with objects in React we will need to copy the object in order for us to use the object with State
    - Same thing with Arrays and Objects, we ALWAYS make a copy and then we can use it
    -Copy the Array and Object first, then modify the specific item you wanna modify
    - View the Scorekeeper.jsx code for an example!


- Working with Arrays in State
    - We can use a number of Array Methods but it is essentially the same idea as working with objects in React. Make a copy using the Spread Operator, then we can use our Arrays / Objects
    - See Emoji Clicker for an example 

- Generating IDs with UUIDs in React
    - Using the UUID library via NPM Install uuid
