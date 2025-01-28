
                    function Clicker({message, buttonText}) {
                        const alertMessage = ()=>{
                            alert(message)
                        }

                        return(
                            <div>
                                <p>Click the Button!</p>
                                <button onClick={alertMessage}>{buttonText}</button>
                            </div>
                        )
                    }

                    export default Clicker