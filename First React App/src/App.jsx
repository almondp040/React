
import './index.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'




function App() {

  return (
    <div>
      <ListPicker values={[1,2,3]}></ListPicker>
      <ListPicker values={["a", "b", "c"]}></ListPicker>
      {/* <Greeter person = "Almond" from = "Georgia"/>
      <Greeter person = "Ted" from = "Alabama"/>
      <Greeter person = "Rosa" from = "New York"/>
      <Greeter></Greeter>
      <Die numSides = {20}/>
      <Die numSides = {6}/>
      <Die numSides = {12}/>
      <Die></Die> */}
     
    </div>
  )
}

export default App
