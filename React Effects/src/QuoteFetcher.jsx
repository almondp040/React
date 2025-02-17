import { useEffect, useState } from "react";

const randomQuoteUrl = "https://inspo-quotes-api.herokuapp.com/quotes/random"; 

function QuoteFetcher() {
    const [quote, setQuote] = useState({text: "", author: ""})

        // Grabbing our data:
         async function fetchQuote() {
            const response = await fetch(randomQuoteUrl)
            const jsonResponse = await response.json()
            const randomQuote = jsonResponse.quote; 
            console.log(randomQuote)
            setQuote(randomQuote)
        }
    //useEffect function to use the data we fetch from the API: 
    useEffect(()=>{fetchQuote()}, [])

    return (
        <div>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
        </div>
    )
}

export default QuoteFetcher