import { useState } from "react"
import './Toggler.css'

function Toggler() {
    // isHappy = what we are changing 
    //  setIsHappy = how we are changing it
    // useState(true) = how it starts, allows us to set our default value
   const [isHappy, setIsHappy] = useState(true)

   const toggleIsHappy = ()=>{
    setIsHappy(!isHappy); 
   }
    return(
        <p className="Toggler" onClick={toggleIsHappy}>
            
            {isHappy ? ":)" : ":("}

            </p>
    )
}

export default Toggler