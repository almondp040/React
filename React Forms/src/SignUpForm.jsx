import { useState } from "react"
function SignUpForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const updateFirstName = (event) => {
        
        console.log(event.target.value)
        setFirstName(event.target.value)
    }

    const updateLastName = (event) => {
        
        console.log(event.target.value)
        setLastName(event.target.value)
    }

    const handleSubmit = () =>{
        console.log(firstName, lastName)
    }
    return(
        <div>
            {/* First Name */}
            <label htmlFor="firstName">First Name: </label>
            <input 
            type="text" 
            placeholder="First Name"  
            value={firstName} 
            onChange={updateFirstName}
            id="firstName"/>
            
            {/* Last Name */}
            <label htmlFor="lastName">Last Name: </label>
            <input 
            type="text" 
            placeholder="Last Name"  
            value={lastName} 
            onChange={updateLastName}
            id="lastName"/>
<button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignUpForm