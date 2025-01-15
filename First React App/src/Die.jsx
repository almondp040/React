function Die({numSides = 6}) {

    console.log(numSides)
  const dieRoll =  Math.floor(Math.random()* numSides) + 1;

    return <p> {numSides} sided dice roll results = {dieRoll}</p>
}

export default Die; 