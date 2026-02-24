import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card';
function App() {
  const [count, setCount] = useState(0)
const myArray=[1,2,3];
  return (
    <>
      <h1 className='bg-amber-200 text-blue-300 p-4 rounded-2xl'>tailwind test..</h1>
     <Card name="aman" />
     <br />
     <br />
     <br />
     <Card  name="akhand" button="click me please" array={myArray} />  {/* // this is how we pass element to the card using (props) */} 
    </>
  )
}

export default App
