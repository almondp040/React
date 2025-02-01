
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
import Counter from './Counter'
import Toggler from './Toggler'
import TogglerCounter from './ToggleCounter'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'
import Counter2 from './Counter2'








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

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];


function App() {

  
  return (
    <>

    
    <Counter2/>


    </>
  )
}

export default App
