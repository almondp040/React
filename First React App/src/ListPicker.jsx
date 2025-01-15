function ListPicker({values}) {
    const randomIndex = Math.floor(Math.random()* values.length); 
    const randomElement = values[randomIndex]
    return (
        <div>
            <p>The List of values: {values}</p>
            <p>Random Element is {randomElement}</p>
        </div>
    )
}

export default ListPicker;