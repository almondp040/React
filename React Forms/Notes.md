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

