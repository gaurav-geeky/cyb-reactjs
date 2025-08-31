import { useState } from 'react'
import './App.css'
import Apidata from './component/Apidata'
import Counter from './component/Counter'
import Todolist from './component/Todolist'


function App() {

  return (
    <>
    <Apidata/>  
    <Counter/>  

    <Todolist/> 
      
    </>
  )
}

export default App
