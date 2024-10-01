import React from 'react'
import Navbar from './Components/Navbar'
import Routing from './Utils/Routing'
import style from './Components/regular.module.css'

function App() {
  return (
    <div className={`w-screen h-screen overflow-y-auto overflow-x-hidden bg-slate-200 relative `}>
        <Navbar />
        <Routing />
    </div>
  )
}

export default App
