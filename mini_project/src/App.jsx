import { useState } from 'react'
import './App.css'
import Apidata from './component/Apidata'
import Counter from './component/Counter'
import Todolist from './component/Todolist'
import Atmpin from './component/Atmpin'
import Agecal from './component/Agecal'
import Bgcolor from './component/Bgcolor'


function App() {

  return (
    <>
    <Apidata/>  
    <Counter/>  

    <Todolist/>  

    <Atmpin/>  

    <Agecal/>  

    <Bgcolor/>
      
    </>
  )
}

export default App
