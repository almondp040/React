import './Die.css'

function Die({value, color = "slateblue"}) {
    return (
        <div className="Die" style={{backgroundColor: color}}>
            {value}
        </div>
    )
}

export default Die