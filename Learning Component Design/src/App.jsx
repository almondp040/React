
import './App.css'
import Dice from './Dice'
import Die from './Die'
import LuckyN from './LuckyN'
import { sum } from './utils'

function lessThan4(dice) {
    return sum(dice) < 4
}

function allSameValue(dice) {
 return dice.every(v => v=== dice[0])
}

function App() {
 

  return (
    <>
<LuckyN numDice={2} winCheck={lessThan4} title='Roll Less Than 4'></LuckyN>
<LuckyN numDice={2} winCheck={allSameValue} title='Snake Eyes!'></LuckyN>

    </>
  )
}

export default App
