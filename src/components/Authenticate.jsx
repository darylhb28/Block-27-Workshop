import { useState } from "react"
import './Styling.css'

function Authenticate({token, setToken}){
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [responseUsername, setResponseUsername] = useState(null)

async function handleClick(event){
    event.preventDefault()
    try{ const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
        { 
          method: "GET", 
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          }
        })
        const result = await response.json()
        console.log(result)
        setSuccessMessage(result.message)
        setResponseUsername(result.data.username.username)

    } catch (error) {
        setError(error.message)
    } 



}



    return (
        <>
            <h2><strong>Authenticate</strong></h2>
            {successMessage && 
                <div>
                    <p>{successMessage}</p>
                    <p>Username: {responseUsername}</p>
                </div>
            }
            {error && <p>{error}</p>}
            <button className="button" onClick={handleClick}>Authenticate Token</button>
        </>
    )

}

export default Authenticate