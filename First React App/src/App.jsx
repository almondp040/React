
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import SlotMachine from './SlotMachine'






function App() {

  
  return (
    <>
    <h1>Slot Machine Excercise!</h1>
    <h2></h2>
    <SlotMachine val1={5} val2={5} val3={3} fontSize={'3rem'} />
    <SlotMachine val1={5} val2={5} val3={5} fontSize={'3rem'}/>
    </>
  )
}

export default App
