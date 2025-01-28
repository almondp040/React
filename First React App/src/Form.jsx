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