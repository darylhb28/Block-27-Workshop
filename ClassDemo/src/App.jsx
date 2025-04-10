import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import Auth from './Auth'

function App() {
  const [token, setToken] = useState()
  console.log(token)
  

  return (
    <>
    <h1>Sign Up!</h1>
    <SignUp setToken={setToken}/>
    <Auth token={token}/>
 
    </>
  )
}

export default App
