import { useState } from "react"

function Counter() {
const [num, setNum] = useState(5); 

const changeNum = ()=>{
    setNum(num + 1)
}

    return (
        <div>
            <p>The Count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}

export default Counter