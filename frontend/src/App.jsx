import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Landing} from './components/Landingpage'
import { SignUp } from './components/Signup'
// Import the functions you need from the SDKs you need



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-3xl font-bold'>
      <Landing />
      <SignUp />
    </div>
  )
}

export default App
