import { useState } from "react"


export function Localstorage() { 

    let [frmdata, setFrmdata] = useState({
        username: "", email:"", password:""
    })

    function handleInput(e) { 
        let {name, value} = e.target
        setFrmdata( {...frmdata, [name]: value})
    }

    function handlesubmit(e) { 
        e.preventDefault() 
        console.log(frmdata)
        localStorage.setItem( 'userdata',  JSON.stringify(frmdata))
    }
    return(
        <>
        <h1> Sign up form </h1>

        <form action="" onSubmit={handlesubmit}>
            <label htmlFor=" "> Name </label>
            <input type="text" name="name" onChange={ handleInput } /> <br /> 
            
            <label htmlFor=" "> Email </label>
            <input type="text" name="email" onChange={ handleInput } />  <br /> 
            
            <label htmlFor=" "> Password </label>
            <input type="text" name="password" onChange={ handleInput } />  <br /> 

            <input type="submit" />  
        </form>
        
        </>
    )
}