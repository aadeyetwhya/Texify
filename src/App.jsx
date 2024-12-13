import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Textarea from './Components/Textarea/Textarea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Textarea />
    </>
  )
}

export default App
