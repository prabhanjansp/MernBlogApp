import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Projects from "./pages/Projects"
import SignIn from "./pages/SignIn"
import Header from './components/Header' 
import SignUp from "./pages/SignUp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
