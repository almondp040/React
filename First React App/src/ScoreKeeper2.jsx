import { useState } from "react";

function ScoreKeeper2({numPlayers, target}) {
    const [players, setPlayers] = useState({playerScore: 0})

    // Need a array to be created based off the number of players: DONE
    const playerArray = new Array(numPlayers).fill(0)

    //Need to create a button for each player: DONE
    // Need Logic to Add a score to each player once the button is clicked
    

const addScore = ()=>{
    setPlayers()
}


    
    return(
        <div>
                {playerArray.map((item, index)=>{
                   
                    return <div>
                        <ul>
                        <li key={index + 1}>Player {index +1}: {item}</li>

                        </ul>
                            
                            <button onClick={addScore}>+</button>

                            </div>
                    

                 
                })}
           
            <button>Reset</button>
        </div>
    )
}

export default ScoreKeeper2