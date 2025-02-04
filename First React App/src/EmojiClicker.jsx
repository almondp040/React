import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

function EmojiClicker() {
    
 const [emojis, setEmojis] =   useState([
    
 { id: uuidv4() , emoji:"😊"}

])

 const addEmoji = ()=>{
    
    setEmojis((oldEmojis) => [...emojis,  { id: uuidv4() , emoji:"😊"} ] )
 }


    return(
  
        <div>
        {
            // Print out a span for each emoji: 
            emojis.map((e)=> (
                <span key= {e.id}style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))


        } 

        <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}

export default EmojiClicker