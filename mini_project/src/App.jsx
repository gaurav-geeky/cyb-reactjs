import { useState } from 'react'
import './App.css'
import Apidata from './component/Apidata'
import Counter from './component/Counter'
import Todolist from './component/Todolist'
import Atmpin from './component/Atmpin'


function App() {

  return (
    <>
    <Apidata/>  
    <Counter/>  

    <Todolist/>  

    <Atmpin/> 
      
    </>
  )
}

export default App
