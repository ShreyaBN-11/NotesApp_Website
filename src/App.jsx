
import './App.css'
import About from './components/about.jsx'
import Home from './components/home.jsx'
import reactDOM from "react-dom/client"
import { Route, Routes, Link } from 'react-router-dom'


function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
