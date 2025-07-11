import { useState } from "react";

function App () { 

  let [name, setName] = useState("cybrom")    // cybrom is initial value /   // name , setname is var & func 
  let [age, setAge] = useState(89)     
  let [contact, setCon] = useState(12346)     

  function fun() { 
    setName("react js")
  } 
  function Age() { 
    setAge(33)
  }

  let [add, setAdd] = useState (0)
  let count=1; 

  function increment () { 
     setAdd(prev => prev + 1);
  }

  return ( 
    <>
    <h1>this is useState (camelCase) - {name} & age - {age} </h1>
    
    <button onClick={fun}> tap here </button>
    <button onClick={Age}>  chng age </button> 
    <br /> 

    <h1> hello I am new useState my contact is - {contact} </h1>
    <br />  
    <button onClick={ ()=> setCon(93458211)}> chng contact</button> 

    <br /> 

    <h1> hello I am increment decrement operator {add}</h1> 
    <button onClick={ increment}>+</button>
    <button onClick={ ()=> setAdd( prev => prev-1) }>-</button>

    </>
  )

}

export default App 

// camel case  palPay 