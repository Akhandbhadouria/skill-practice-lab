import { useState, useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, set_length] = useState(8)
  const [character, set_character] = useState(false)
  const [number, set_number] = useState(false)
  const [pass, set_pass] = useState("")

  const pass_generator = useCallback(() => {
    
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm "

    if (character) str += "!@#$%^&*()"
    if (number) str += "1234567890"

    for (let i = 0; i <= length; i++) {
      const char_ind = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char_ind);
    }
    set_pass(pass)
  }, [length, character, number, set_pass])


  useEffect(() => {      //important..........
    pass_generator();
  }, [length, character, number])

  // useRef hook for copy text..................
  const pass_ref=useRef(null)
  const password_generator=useCallback(()=>{
  
    window.navigator.clipboard.writeText(pass);
  },[pass])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center'>pass generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 bg-white placeholder:text-gray-400"
            placeholder="password"
            readOnly
          /> <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 'onClick={password_generator}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <input type="range" min={6} max={100} value={length} onChange={(e) => { set_length(e.target.value) }} /><label >length: {length}</label>     {/*  console.log(e.target); // <input type="range" min="6" max="100" value="42"> */}
          <div>
            <input type="checkbox" checked={number} id="numberInput" onChange={() => { set_number(!number) }} /> <label>number</label>
          </div>
          <div>
            <input type="checkbox" checked={character} id="charInput" onChange={() => { set_character(!character) }} /> <label>character</label>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
