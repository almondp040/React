import { useState } from "react";

function ScoreKeeper2({numPlayers = 3, target = 5}) {
   

    // Need a array to be created based off the number of players: DONE
    const playerArray = new Array(numPlayers).fill(0)

    const [scores, setScores] = useState(playerArray)

    //Need to create a button for each player: DONE
    // Need Logic to Add a score to each player once the button is clicked
    

const incrementScore = (index)=>{
    setScores(previousScores => {
        const copy = [...previousScores]; 
        copy[index] += 1; 
        return copy
    })
}

const reset = () =>{
    setScores(playerArray)
}

    
    return(
        <div>

            <h1>Score Keeper</h1>
            {scores.map((score, index)=>{
            
                return ( 
                <div>
                    <ul>
                            <li key={index}>
                                Player {index+1}: {score}
                                <button onClick={()=> incrementScore(index)}>+1</button>
                                {score >= target && "Winner!"}
                            </li>
                    </ul>
                    
                    </div>
                )
            })}
           
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ScoreKeeper2