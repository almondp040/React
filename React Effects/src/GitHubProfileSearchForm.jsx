import { useState } from "react";

function GitHubProfileSearchForm({search}) {
    const [term, setTerm] = useState(""); 

    // Allows us to type inside of the form: 
    const handleChange = (event) =>{
    setTerm(event.target.value)
    };

//Allows us to submit: 
const handleSubmit = (event) =>{
    event.preventDefault()
    search(term)
    setTerm("")
};

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button >Search!</button>
        </form>
    );
};

export default GitHubProfileSearchForm;