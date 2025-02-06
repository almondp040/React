import Die from "./Die";
import './Dice.css'


function Dice({dice, color}) {
    return (
        <section className="Dice">
            {dice.map((value, index)=>(
                <Die key={index} value={value} color = {color}></Die>
            )

            )}
        </section>
    )
}

export default Dice