import { useState } from "react"

function SignUp({setToken}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

   async function handleSubmit(event){
        event.preventDefault();
        try{ 
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
            { 
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify (
                    {
                        username: username, 
                        password: password
                    })
            } )
            const result = await response.json()
            console.log(result)
            setToken(result.token)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}> 
            <label>
                Username 
                <input 
                name="username" 
                onChange={(event)=> setUsername(event.target.value)} 
                value = {username}
                />
            </label>
            <br/>
            <label>
                Password 
                <input name="Password" 
                onChange={(event) => setPassword(event.target.value)}
                value = {password}
                />
            </label>
            <br/>
            <button>Sign Up!</button>
        </form>
        
        </>
    )



}

export default SignUp