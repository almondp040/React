import { useState } from "react"

function Counter2() {
console.log("Rendered!!")
    const [count, setCount] = useState(0)
    const addOne = ()=>{
    setCount(count + 1)
}

const addThree = ()=>{
    setCount(currentValue => currentValue + 3)
}

const setToTen = ()=>{
    setCount(10)
}
    return(
        <div>
            <h1>State Demo!</h1>
            <p>Count: {count}</p>
            <button onClick={addOne}>+</button>
            <button onClick={addThree}>+</button>
            <button onClick={setToTen}>Set to 10</button>
        </div>
    
    )
}

export default Counter2