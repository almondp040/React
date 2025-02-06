
import './App.css'
import Dice from './Dice'
import Die from './Die'



function App() {
 

  return (
    <>
    <Dice dice = {[3,6,1]} color={"red"}></Dice>
    <Dice dice = {[1,2,3]}></Dice>
    </>
  )
}

export default App
