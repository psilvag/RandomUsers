
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'



function App() {
  const [randomUser, setRandomUser] = useState()
  const [stateButton, setStateButton] = useState(true)

  useEffect(() => {
    const URL = "https://randomuser.me/api/"
    axios.get(URL)
      .then(res => setRandomUser(res.data.results[0]))
      .catch(error => console.log(error))
  }, [stateButton])

  const handleClick = () => {
    setStateButton(!stateButton)
  }

  return (
    <div className='random-user'>
      <h1>Random user Generator</h1>


      <UserInfo
        randomUser={randomUser}
        stateButton={stateButton} />

      <button onClick={handleClick} className='user-random-button'>New User</button>

    </div>


  )
}

export default App
