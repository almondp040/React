import './Button.css'

function Button({ClickFunction, label = 'Click Me'}) {
    // Uses the roll function in LuckyN
    return (
        <button className='Button' onClick={ClickFunction} label = 'Click Me'>Re-Roll Dice</button>
    )
}

export default Button