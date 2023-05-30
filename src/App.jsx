
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'



function App() {
  const [randomUser,setRandomUser]=useState()
  const [stateButton,setStateButton]=useState(true)

  useEffect(()=>{
    const URL="https://randomuser.me/api/"
    axios.get(URL)
    .then(res=>setRandomUser(res.data.results[0]))
    .catch(error=>console.log(error))
  },[stateButton])
  
   const handleClick=()=>{
    setStateButton(!stateButton)
   }

  console.log(randomUser);

  return (
       <div className='user_info'>
        <h1>Random Users</h1>
        <UserInfo
        randomUser={randomUser}
        stateButton={stateButton}/>
        <button onClick={handleClick} className='user_random_button'>New User</button>
        </div>
       
       
  )
}

export default App
