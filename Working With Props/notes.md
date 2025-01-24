#Working With Props!

-Introducing Props
    - Props are like arguments that we can provide to our components
    - We use props to make configurable components!
    - Allow us to write a component that has arguments (See Greeter Component)
    -Using the HTML = syntax we can pass in arguments into our greeter functions
    -They are just function arguments, and is common to destructure with props!
                - <Greeter person = "Almond"/>
                - function Greeter(props) {
    
                     return (<h1>Hi There! {props.person}</h1>)
                                                        }


                    export default Greeter;

- Non String Props
    -Use {} for the props on the HTML line

-Setting Default Prop Values
    - set the parameter in the function equal to something in the function
                    function Die({numSides = 6}) {

                     console.log(numSides)
                     const dieRoll =  Math.floor(Math.random()* numSides) + 1;

                        return <p> {numSides} sided dice roll results = {dieRoll}</p>
                                                                    }

                        export default Die; 

- Passing Arrays and Objects
    -The syntax is the same as Non String Props!
                     <ListPicker values={[1,2,3]}></ListPicker>
                    <ListPicker values={["a", "b", "c"]}></ListPicker>
                     <ListPicker values={[1,2,3]}></ListPicker>
                    <ListPicker values={{a:2, b:4}}></ListPicker>
    -Objects work the same way!

- React Conditionals
    - works exactly the same way that if conditional statements work is one method
    - we can also set these conditionals to be inline on our HTML element, by putting out JS logic inside of the H2 directly: 
                       <h1>{num1 === num2 ? "You Win!!!" : "You Lose :("}</h1>
    - We can also render HTML elements based off of the conditional as well so instead of showing the "You Win" or "You Lose" strings, you can replace them with HTML elements
                            {num1 === num2 ? <h3>You Win!!</h3> : <h3>You Lose :(</ h3>}

-React Developer Tools
    - Install React Dev Tools for Chrome then we can use it via the Dev Tools!

- Adding Dynamic Styles
   -We can either make a class for the styles or set them inline using style = {}
   -Then we can set JS and our styles together to a variable, not very useful for overall styles like font size, if its dynamic put it in 
                    function Heading({color = "olive", text}) {

                     return (
                    <h1 style={{color: color}}>{text}</h1>
                                 )
    
                                                                                    }

                                export default Heading;

- Rendering Arrays with Map
    -We can use map() to take our array items and then map them to elements! 
    - No need to use a arrow function for this, use MDN docs as a easy sure fire reference
    - Map is pretty much the standard for using arrays in React
    - For Example: 
                                        function ColorList({colors}) {

                    const lis = colors.map(color => <li>{color}</li>)

                        return (
                            
                            <div>
                                <p>Color List</p>
                            <ul>{lis}</ul>
                            </div>
                        
                        )
                    }
                
                    export default ColorList

-This is a test push!


