import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User_provider from './context/context_provider'
import Login from './components/login'
import Profile from './components/profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <User_provider>
     <h1>react </h1>
     <Login/>
    < Profile/>
    </User_provider>
  )
}

export default App
