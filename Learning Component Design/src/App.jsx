
import './App.css'
import BoxGrid from './BoxGrid'

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
    <BoxGrid></BoxGrid>
    </>
  )
}

export default App
