import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  
  const add_value=()=>{
    setCount(prev=>prev+1)

  }
  const sub_value=()=>{
   
    
    setCount(prev=>{
      if(count==0){
        alert("value can not further decreased")
        return prev
      }
      return prev-1
    })
  }
  return (
    <>
      <h1>AKHAND's PROJECT...</h1>
      <h2>{ // updating html when condition  hits....................
        count===0 ? "value can not further decreased":`counter value is ${count}`
        } </h2>
      <button  
      onClick={add_value}
      >count_UP {count}</button>
      <br />
      <br />
      <button onClick={sub_value}>count_DOWN {count}</button>
    </>
  )
}

export default App
