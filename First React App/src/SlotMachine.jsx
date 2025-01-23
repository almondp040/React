//Component to contain the slot machine logic, if the 3 values match then show a You Win! in green, 
// if any are different, show you lose red
function SlotMachine({val1, val2, val3, fontSize}) {
    const condition = val1 === val2 && val1 === val3
    return(
        <div>

            
            <h2 style={{color: condition ? "green": "red" ,fontSize: fontSize}}>

            {condition ? "You Win!": "You Lose"}

            </h2>
        

         {condition && <h3>Congrats!</h3>} 
        </div>
    )
}

export default SlotMachine