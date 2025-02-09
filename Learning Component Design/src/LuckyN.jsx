import { useState } from "react"
import { getRolls, sum } from "./utils"
import Dice from "./Dice";
import Button from "./Button";


function LuckyN({ title = "Dice Game" ,numDice =2, winCheck}) {
   const [dice, setDice] = useState(getRolls(numDice))
   const isWinner = winCheck(dice)
   const roll = () => setDice(getRolls(numDice))
   return (
    <main className="LuckyN">
        <h1>Lucky {title} {winCheck(dice)} {isWinner && "You Win!!"}</h1>
        <Dice dice={dice}></Dice>
        <Button ClickFunction = {roll}></Button>
    </main>
   )
}

export default LuckyN