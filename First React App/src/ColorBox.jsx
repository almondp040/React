import './ColorBox.css'
import {useState} from 'react'

function randomChoice(array) {
    const idx = Math.floor(Math.random()* array.length) 
   return array[idx];
}

function ColorBox({colors}) {
    const [color, setColor] = useState(randomChoice(colors))

    const changeColor = ()=>{
        const randomColor = randomChoice(colors)
        setColor(randomColor)
    }

    return (
<div 
className="ColorBox" 
style={{backgroundColor: color}}
onClick={changeColor}></div>
    )
}

export default ColorBox