import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './componets/addTodo'
import Todos from './componets/Todos'
import { useSelector } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
const Todo=useSelector((state)=>state.todos)
  return (
    <>
     <h1>about toolkit</h1>
     <AddTodo/> 
    
   <Todos/> 
   
    
    </>
  )
}

export default App
