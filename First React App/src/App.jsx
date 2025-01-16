
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'





function App() {

  return (
    <div>
      <Heading color = "magenta" text={"Welcome!"}></Heading>
      <Heading text={"Welcome!"}></Heading>
        <DoubleDice></DoubleDice>
        
      

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
