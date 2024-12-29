# JSX In Detail

- The Rules of JSX
    - JSX is a syntax extension for Javascript
    - Allows us to write markup that looks like HTML directly inside of our JS
    - It's not "legal" JS on it's own, so it must be transpiled

- JSX Rules 
    - You must explicity close self-closing elements like <br/>
    - Components can only return a single element 
    - ALWAYS Close our HTML elements inside of our components
    - Multiple HTML elements will need to be inside of a DIV element, which is good practice anyway 
    - Can only return one top level element inside of the HTML 
                <div>
                <p>Hello There!</p>
                <p>Testing Stuff!</p>
                </div>

- React Fragments
    - If the divs get to be too much we can use what is called a React Fragment, which is a empty HTML tag
                <>
                <p>Hello There!</p>
                <p>Testing Stuff!</p>
                </>
    - That way JSX will capture our HTML elements without the Div. Useful for forms 


- Evaluating JS Expressions in JSX
    - Adding dynamic items inside of JSX via {}
    - The curly braces will excute JS inside of the HTML element, similar to how EJS works 
    - Where the items inside of the curly braces use JS to acquire their values via variables
                <>
                <p>Hello There! {data.name}</p>
                <p>Testing Stuff!{data.place}</p>
                </> 
    - Another Example: 
                export default function Die() {
                const dieRoll = Math.floor(Math.random() * 6);
                return <h1>Die Roll: {dieRoll}</h1>;
                }


- Component Decomposition
    - Essentally making our code cleaner by breaking our code down so that its easier to understand and read
    - Start small then build up via components
    - Here's our initial Dice Roll Function: 
                export default function Die() {
                const dieRoll = Math.floor(Math.random() * 6);
                 return <h3>Die Roll: {dieRoll}</h3>};

    -Then we add this to the DiceRolls Component for multiple dice to be generated: 

                import Die from "./Die";

                export default function DiceRolls() {
                    return (
                        <div>
                        <h1>Dice Roll!</h1>
                        <Die />
                        <Die />
                        <Die />
                        </div>
                    );
                    }
    -Finally we add it to our App Component
                import DiceRolls from "./DiceRolls";

                    export default function App() {
                    return (
                        <div className="App">
                        <h1>Show a Random Number</h1>
                        <h2>Start editing to see some magic happen!</h2>
                        <DiceRolls />
                        <DiceRolls />
                        </div>
                    );
                    }

- Styling Components
    - The conventional way of styling our components is to create a class to match with our component name
    - We will need to specifically say className in React (See className = "App" above)
    - We would also make our style.css files to be the exact same name as the component
    - This tells webpack to include the styles from this file
    - Useful to keep our styles component based for easy changes and access
    - Assign the classname to the top level of the component (Div for example, then we can add our styles to the child elements)

                import "./Die.css";


- Random Pokemon Practice Build (For tomorrow)



