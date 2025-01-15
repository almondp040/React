function Greeter({person = "everyone", from = "State"}) {
    
    return (
    <div>
    <h1>Hi There! {person}</h1>
    <h2>from, {from}</h2>
    </div>

    )
}


export default Greeter;