# React Effects Notes
- Rendering and Effects
    - This is what effects are for - doing after (& unrelated to) a render 
    - Useful for different kinds of things: 
        - Changing parts of the DOM not covered by React
        - Async operations, like AJAX requests when a component is mounted
        - Doing things when a component is about to be unmounted 
    - Effects are used for "side-effects": doing things unrelated to each other 

- The useEffect Hook
    - To use the useEffect hook you must import it similar to useState
    - No need to worry about the 2 renders at the beginning
    - view the Counter.jsx file

- 2nd Argument to useEffect
    - useEffect(myCallbackFunction)
        - Runs myCallbackFunction after every render
        - we can also provide a second argument in the form of an array
        - For example useEffect(myCallBackFunction, [productId, userId])
            - Runs myCallBackFunction effect only if productID or userId was changed
            - If you provide an empty array it will only run on mount

- Examples of useEffect
    - Fetching Data on Initial Render from a API
        - Get information from a API on the first render
        - Use State doesn't like async functions fyi

- Use: Getting Data via AJAX on mount
    - When a component renders, fetch data from an API
        - Data fetching is asynchronous, and may take a moment to complete
        - Want to show user something, like loading message, while fetching 
    - To fetch correctly: 
        - Have an effect that runs only once
        - Inside effect, when API calls is finished, will set state and re-render
        - Good to define our async function first then add it to the state, but you MUST wrap it in a function