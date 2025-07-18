
import {Route, Routes } from 'react-router-dom'

import './App.css' 
import Home from './my Comp route/Home'
import About from './my Comp route/About'
import Contact from './my Comp route/Contact'


function App() {

  return (
    < >
      <h1 > this is our app page </h1>

    <Routes > 
      
      <Route path="/home" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>

    </>
  )
}

export default App
