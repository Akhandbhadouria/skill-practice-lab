import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './contexts/theambtn'
import Card from './contexts/card'
import { Use_provider } from './contexts/theam'
function App() {
  const [mode,setMode]=useState("light");
  
 const lighttheam=()=>{
    setMode("light")
  }
  const darktheam=()=>{
    setMode("dark")
  }

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark");
  document.querySelector('html').classList.add(mode);
},[mode])
  return (
    <Use_provider value={{theam:mode,lighttheam,darktheam}}>


      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

      
    </Use_provider>
  )
}

export default App
