import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {MainHomePage} from "./components/HomePage/MainHomePage"
import Button from '@mui/material/Button';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainHomePage/>
    </div>
  )
}

export default App
