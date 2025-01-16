

function DoubleDice() {
    //Roll 2 random numbers 1-6: 
    const num1 = Math.floor(Math.random() *3) + 1
    const num2 = Math.floor(Math.random() *3) + 1
    const isWinner = num1 === num2; 

    const style = {color: isWinner ? "green": "red"}
    //Old Way through If Statements
    const result = isWinner ? "You Win!!!" : "You Lose :("
    return(
        <>
        {/* Put the logic directly into the HTML variable */}
        {isWinner ? <h3 style={style}>You Win!!</h3> : <h3 style={style}>You Lose!</h3>}
        </>
    )
}

export default DoubleDice