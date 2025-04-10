import { useState } from "react"
import './Styling.css'

function SignUpForm({token, setToken}){
    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")
    const [error, setError] = useState (null)


async function handleSubmit(event){
    event.preventDefault();
    try { const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
        { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json" 
          }, 
          body: JSON.stringify({ 
            username: {username}, 
            password: {password} 
          }) 
        }) 
        const result = await response.json()
        console.log(result)
        setToken(result.token)

    } catch (error){
        setError(error.message)
    }


}


    return(
        <>
        <h2><strong>Sign Up</strong></h2>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input 
                value={username}
                onChange={(event)=> setUsername(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Password: 
                <input 
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
            </label>
            {
                (username && username.length < 5) && 
                <p className="usernameMessage"><strong>Username must be at least 5 letters</strong></p>
            }
            <br/>
            <button className="button">Submit</button>
        </form>
        </>
    )

}

export default SignUpForm