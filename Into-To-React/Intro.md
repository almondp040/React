# Introducing React!

- React!
    - The world's most popular front end library!
    - Is a library that helps us build user interfaces from components
    - We can assemble smaller components to build large applications 

- Components combine HTML and Logic into a single reusable Function
    - Basically it's just HTML, CSS and JS in a bundle and we call those components!
    - Its about reusing and building components

- Setting up our code and sandbox
    - We can use code sandbox.io so we can run react! We will need to make an account tho


- The basics of JSX
    - We essentially write functions that know how to render themselves into HTML
    - JSX is a syntax extension for Javascript
    - It allows us to write markup that looks like HTML directly inside of our HTML
    - It's not "Legal" JS on it's own, so it must be transpiled


- The Basic App Structure of a React Application
    - App Component is the highest level component called App
    - The App file usually has a single component called App that will load everything else! 
    - No need to touch the Index.js file usually, as long as the code is in the App component we should be good! 


- Our first React Component
    - Essentially writing a function to return HTML
    - Defining a function is not the same as rendering the component 
    - In order for us to render the component we must put the function name inside of some HTML brackets, this is how we call the function
    - We are only able to return 1 HTML option at a time, next section will show us how to do this!

        export default function App() {
  return (
    <div className="App">
      <Greeter/>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function Greeter() {
  return <h1>Hello!!</h1>;
}


 - Importing and Exporting Components
    - Splitting our code into seperate files, one component PER file
    - Similar to how we export functions we will use the Import option
    - Once we import our component we can use it via the JSX syntax
    - First export the file BEFORE we import it
    - USE DEFAULT for all components, you can also destructure and take out specific functions from files as well but we will NEED the {}
    - Have our exports to match the file name, seems to be the easiest option 

                import App from "./App";
                root.render(
                <StrictMode>
                 <App />
                </StrictMode>
);

