
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import SlotMachine from './SlotMachine'
import ShoppingList from './ShoppingList'


const data = [
{id: 1, item: "eggs", quantity: 12, completed: false},
{id: 2, item: "milk", quantity: 1, completed: true},
{id: 3, item: "chicken breast", quantity: 4, completed: false},
{id: 4,item: "carrots", quantity: 6, completed: true}, 
{id: 5, item: "basketball", quantity: 2, completed: false}
]; 



function App() {

  
  return (
    <>
    <ShoppingList items={data}></ShoppingList>
    {/* <h1>Slot Machine Excercise!</h1>
    <h2></h2>
    <SlotMachine val1={5} val2={5} val3={3} fontSize={'3rem'} />
    <SlotMachine val1={5} val2={5} val3={5} fontSize={'3rem'}/> */}
    </>
  )
}

export default App
