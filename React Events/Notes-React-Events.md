# React Events!
    -Essentially setting up event listeners in React
    -First we define the function at the top of the component, then we can use onClick with the button to use the function
                        function handleClick(params) {
                        console.log("CLICKED THE BUTTON!!")
                    }


                    function Clicker(params) {
                        
                        return(
                            <div>
                                <p>Click the Button!</p>
                                <button onClick={handleClick}>Click</button>
                            </div>
                        )
                    }

                    export default Clicker

    -Non Click Events
        - Used the same way as the code above! 
                    function handleFormSubmit(event) {
                     // Prevents the default behavior of refreshing the page on submission in a form
                      event.preventDefault(); 
                    console.log("Submitted the form!");
                                                                            }


                        function Form(params) {
                            return(
                                <form onSubmit={handleFormSubmit}>
                                    <button>Click Me</button>
                                </form>
                            )
                        }

                        export default Form
                                            function Clicker({message, buttonText}) {
                        const alertMessage = ()=>{
                            alert(message)
                        }

                        return(
                            <div>
                                <p>Click the Button!</p>
                                <button onClick={alertMessage}>{buttonText}</button>
                            </div>
                        )
                    }

                    export default Clicker
                            