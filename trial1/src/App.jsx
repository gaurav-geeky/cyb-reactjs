import { useState } from 'react'
import { Color } from './component/Color' 
import State from './component/State'
import Form from './component/Form' 

import { Link } from 'react-router-dom'

import './App.css'


function App() {

  return (
    <> 
    <div> 
      nav bar 
      {/* <p>  <Link to="/color"> COLOR </Link> </p> */}
      {/* <p> <Link to="/state"> STATE </Link> </p> */}
      {/* <p> <Link to="/form"> FORM </Link>  </p> */}
    </div> 

    <hr />
    <Color />
      
    <hr /> 
    < State /> 
      
    <hr /> 
    < Form /> 
      
    <hr /> 

      
    </>
  )
}

export default App
