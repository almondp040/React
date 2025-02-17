import { useEffect, useState } from "react"

function Counter(params) {
  const [count, setCount] = useState(0); 
  const [name, setName] = useState(""); 
  useEffect(
    // useEffect Function:
    function myEffect() {
        console.log("My Effect was called!"); 
    }, []
  )
  const increment = () =>{
    setCount((c) => c + 1); 
  }

  const handleChange = (event) =>{
    setName(event.target.value)
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+1</button>
        <p>Name: {name}</p>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
    </div>
  )
}

export default Counter