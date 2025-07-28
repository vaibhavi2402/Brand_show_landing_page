import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Contents from './components/Contents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <NavBar />
        <Contents />
        <div className='bg-[#360149] h-[100vh] flex justify-center items-center'>
          <div className="border-white/20 bg-transparent backdrop-blur-md bg-linear-[120deg, rgba(255,255,255,0.2), rgba(0,0,0,0.1)] shadow-lg rounded-2xl p-6">
            <h2 className="text-black text-xl font-semibold mb-4">Glassmorphism Card</h2>
            <p className="text-black">This is a glass effect using Tailwind CSS.</p>
          </div>
        </div>
        <div className='w-full max-w-md p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transitation all delay-200 hover:border-white/40'></div>
      </div>
    </>
  )
}

export default App
