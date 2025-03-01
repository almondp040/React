# React Forms!

- HTML Form elements work differently than other DOM elements in React
    - Form elements naturally keep some internal state

- Thinking About State
    - It's convenient to have a JS function that 
        - handles the submission of the form and 
        - has access to the data the user entered. 
    - The technique to get this is controlled components!

- One Source of Truth
    - We make React state be the "single source of truth"
    - React controls: 
        - What is shown (the value of the component)
        - What happens when the user types (this gets kept in state)
        - Input elements controlled in this way are called controlled components 
        - We take the input of the form and use it with State - See Username Form as an example

- The htmlFor Property
    - How we label inputs in React
    - Use htmlFor in the label element to assign labels to inputs
    - VS Code automatically does this for us :), but see Username Form as an example 

- Working with Multiple Inputs
    - See the SignUp Form file for an example
    - You must have a seperate state for each input same for the input HTML and the label
    - But there is a better approach that isn't making a seperate piece of state for every input field
    - Instead we can use an object!

- Handling Multiple Inputs 
    - To Handle multiple controlled inputs
        - Instead of making a separate onChange function for every single input, we can make one generic function for multiple inputs
        - Add HTML name attribute to each JSX input element 
        - Then the handler function can determine the key in state to update based on the event.target.name
        - Using this method, keys in state MUST match input name attributes!
        - See SignUpFormNew for an example

- Shopping List Example
    - Parent: ShoppingList Component which will manage a list of shopping items
    - Child: New List Item Form: Component to add items to the list
    
- Passing Data Up to a Parent Component
    - In React we generally have downward data flow: 
        - "Smart" parent components with simpler child components 
        - But it's common for form components to manage their own state
        - But smarter parent component usually has a doSomethingOnSubmit method to update its state after the form submission
        - So: parent passes its doSomethingOnSubmit method as a prop to a child 
        - Child component calls this method, updating the parent's state
        - Child is "dumber" - all it knows is to invoke that function with its data

- Form Validation From Scratch
    - We can do this in 2 ways: 
        - Create state for each validation: See Validate Shopping List File for an example
        - Use a library for form validation: React Hook Form library

- Validations using React Hook Form 
    - Library that helps us write forms with built in validation
    - Really take a deep dive into the docs, and watch the tutorial video