import { useState } from "react"


function Form() { 

    let [value, setValue] = useState("") 
    
    let [age, setAge] = useState( ) 
    
    let [color, setColor] = useState( ) 
    let [height, setHeight] = useState( ) 
    let [weight, setWeight] = useState( ) 


    function handleInput(e) { 
        console.log(e.target.value); 
        setValue(e.target.value)
    }
    return (
        <>
        <h1> This is Form page </h1>
        
        <form action=" "> 
            <label htmlFor=" "> Name </label>
            <input type="text" onChange={ handleInput } />
            
            <label htmlFor=" "> Age </label>
            <input type="text" onChange={ (e)=> setAge(e.target.value) } />
            
            <label htmlFor=" "> color </label>
            <input type="text" onChange={ (f)=> setColor(f.target.value) } /> 

            <label htmlFor=" "> Height </label>
            <input type="text" onChange={ (e)=> setHeight(e.target.value) } /> 

            <label htmlFor=" "> Weight </label>
            <input type="text" onChange={ (e)=> setWeight(e.target.value) } />


        </form>

        <h2> data is :  {value}</h2> 
        <h2> AGe data is :  {age}</h2>
        <h2> color data is :  {color}</h2>
        <h2> height data is :  {height}</h2>
        <h2> weight data is :  {weight}</h2>
        </>

        
    )
}
export default Form 