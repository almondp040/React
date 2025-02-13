import { useState } from "react";

function SignUpFormNew() {
    const [formInputs, setFormInputs] = useState({
        firstName: "", 
        lastName: "", 
        password: ""
    })

    const handleChange = (event) =>{
        const changedField = event.target.name
        const newValue = event.target.value

        setFormInputs(currentData => {
            // currentData[changedField] = newValue
            // return {...currentData}
            // can also write the lines above like this: 
            // Both top and bottom do the exact same thing
            return {
                ...currentData, 
                [changedField]: newValue
            }

        })
        
    }

    const handleSubmit = () =>{
        console.log(formInputs)
    }

    return(
        <div>
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            placeholder="First Name"
            value = {formInputs.firstName}
            id="firstName"
            name="firstName"
            onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            placeholder="Last Name"
            value = {formInputs.lastName}
            id="lastName"
            name="lastName"
            onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            placeholder="Password"
            value = {formInputs.password}
            id="password"
            name="password"
            onChange={handleChange}
            />

            <button onClick={handleSubmit} >Submit</button>
            
        </div>
    )
}

export default SignUpFormNew