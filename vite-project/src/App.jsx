import { useState } from 'react'
import './App.css'
import Home from "../src/components/Home"
import Navigation from "../src/components/Navigation";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation></Navigation>
    <Home></Home>
    </>
  )
}

export default App
