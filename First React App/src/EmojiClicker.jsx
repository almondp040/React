import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

function randomEmoji() {
    const choices = ["😂", "❤", "🎉", "💖", "🥩"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function EmojiClicker() {
    
 const [emojis, setEmojis] =   useState([
    
 { id: uuidv4() , emoji: randomEmoji()}

])

 const addEmoji = ()=>{
    
    setEmojis((oldEmojis) => [...emojis,  { id: uuidv4() , emoji: randomEmoji()} ] )
 }

 const deleteEmoji = (id) =>{
// Delete the emoji with the specific ID
setEmojis(
    previousEmojis => {
        return previousEmojis.filter(e => e.id !== id)
    }
)

 }

 const makeHearts = () =>{

    emojis.map((item)=>{
        console.log(item)
        setEmojis(previousEmojis => {
         return  previousEmojis.map((item)=>{
                return {...item, emoji: "❤"}
            })
        })
    })
 }


    return(
  
        <div>
        {
            // Print out a span for each emoji: 
            emojis.map((e)=> (
                <span onClick={()=>deleteEmoji(e.id)} key= {e.id}style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))


        } 

        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={makeHearts}>Make them all 💖</button>
        </div>
    )
}

export default EmojiClicker