import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDetails from './Components/AddDetails'
import ViewDetails from './Components/ViewDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewDetails />
    </>
  )
}

export default App
