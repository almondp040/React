
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
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'





const data = [
{id: 1, item: "eggs", quantity: 12, completed: false},
{id: 2, item: "milk", quantity: 1, completed: true},
{id: 3, item: "chicken breast", quantity: 4, completed: false},
{id: 4,item: "carrots", quantity: 6, completed: true}, 
{id: 5, item: "basketball", quantity: 2, completed: false}
]; 

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];



function App() {

  
  return (
    <>

  <Clicker message= "Hi!" buttonText = "Please Click Me!"></Clicker>
  <Clicker message= "Please Stop Clicking Me!" buttonText = "Do Not Click!"></Clicker>
  {/* <Form></Form> */}

    {/* <ShoppingList items={data}></ShoppingList> */}
    {/* <PropertyList properties = {properties}></PropertyList> */}
    {/* <h1>Slot Machine Excercise!</h1>
    <h2></h2>
    <SlotMachine val1={5} val2={5} val3={3} fontSize={'3rem'} />
    <SlotMachine val1={5} val2={5} val3={5} fontSize={'3rem'}/> */}
    </>
  )
}

export default App
