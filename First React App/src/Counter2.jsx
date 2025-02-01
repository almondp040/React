import { useState } from "react"

function Counter2() {

    const [count, setCount] = useState(0)
    const addOne = ()=>{
    setCount(count + 1)
}

const addThree = ()=>{
    setCount(currentValue => currentValue + 3)
}
    return(
        <div>
            <h1>State Demo!</h1>
            <p>Count: {count}</p>
            <button onClick={addOne}>+</button>
            <button onClick={addThree}>+</button>
        </div>
    
    )
}

export default Counter2