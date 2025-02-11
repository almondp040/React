import Box from "./Box"
import { useState } from 'react'
function BoxGrid({numBoxes = 9}) {
    const [boxes, setBoxes] = useState([false, false,true, false, false, false, true, false ,false])

    const reset = () => {
        setBoxes([false, false,false, false, false, false, false, false ,false])
    }

    const toggleBox = (index) =>{
        setBoxes((oldBoxes) => {
          return oldBoxes.map((value, i) => {
                if (i === index) {
                    return !value
                } else {
                    return value
                }
            }
        )
        })
    }
    return(
        <div className="BoxGrid">
               {boxes.map((b, index)=> (
                <Box key={index} isActive={b} toggle = {() => toggleBox(index)}/>
               ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default BoxGrid