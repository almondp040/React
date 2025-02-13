import { useState } from "react"
function UsernameForm() {
    const [username, setUsername] = useState("")
    
    const updateUsername = (event) => {
        console.log("Changed!!!")
        console.log(event.target.value)
        setUsername(event.target.value)
    }
    return(
        <div>
            <label htmlFor="username">Enter A Username: </label>
            <input 
            type="text" 
            placeholder="username"  
            value={username} 
            onChange={updateUsername}
            id="username"/>
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm