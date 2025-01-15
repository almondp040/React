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