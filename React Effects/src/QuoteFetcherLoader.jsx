import { useEffect, useState } from "react";
import './App.css'

const randomQuoteUrl = "https://inspo-quotes-api.herokuapp.com/quotes/random"; 

function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({text: "", author: ""})
    const [isLoading, setIsLoading] = useState(true)

        // Grabbing our data:
         async function fetchQuote() {
            const response = await fetch(randomQuoteUrl)
            const jsonResponse = await response.json()
            const randomQuote = jsonResponse.quote; 
            console.log(randomQuote)
            setQuote(randomQuote)
            setIsLoading(false)
        }
    //useEffect function to use the data we fetch from the API: 
    useEffect(()=>{fetchQuote()}, [])

    return (
        <div>
            {<p className="Loader" style={{opacity: isLoading ? 1 : 0}}>Loading...</p>}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
            <button onClick={fetchQuote}>New Quote</button>
            
        </div>
    )
}

export default QuoteFetcherLoader