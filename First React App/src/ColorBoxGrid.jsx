import ColorBox from "./ColorBox"
import './ColorBoxGrid.css'


function ColorBoxGrid({colors}) {
    
    const boxes = []; 
    for (let index = 0; index < 25; index++) {
        boxes.push(<ColorBox colors={colors}/>)
        
    }
    console.log(boxes)
return(
    <div className="ColorBoxGrid">
        {boxes}
    </div>
)
}

export default ColorBoxGrid