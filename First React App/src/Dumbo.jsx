import { useState } from "react"

function generateGameBoard(params) {
    console.log("Making the new game board!")
    return Array(5000)
}

function Dumbo(params) {
    const [board, setBoard] = useState(generateGameBoard)
    return (
    <button onClick={()=>setBoard("Hello!")}>Click Me to change state!</button>)
}

export default Dumbo