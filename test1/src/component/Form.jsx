import { useState } from "react"


export function Form () { 

    let [frmdata, setFrmdata] = useState( {   // to dynamic fill 
        name: "", email: "", password: "" 
    }) 

    let [show, setShow] = useState( { } ) 

    function Input (e) {       //           handling input data dynamic
        let {name, value} = e.target         
        setFrmdata ({...frmdata, [name]: value})
    }

    // handle final submit 
    function finalSub (e) { 
        e.preventDefault() 
        console.log(frmdata) 

        localStorage.setItem('user', JSON.stringify(frmdata)) 

        let got =  JSON.parse(localStorage.getItem('user')) 
        
        setShow(got)
    }


    return (
        <>

        <form action="" onSubmit={ finalSub }>

            <label htmlFor=""> Name </label> 
            <input type="text" name="name" onChange={ Input } /> <br /> 

            <label htmlFor=""> Email </label> 
            <input type="text" name="email" onChange={ Input } /> <br /> 

            <label htmlFor=""> Password </label> 
            <input type="text" name="pass" onChange={ Input } /> <br /> 

            <input type="submit" />

        </form>

        <br /> 

        <h1> Show form data here {show.name} , email : {show.email} </h1>
        <h1> Show detail {show.pass} </h1>
        
        </>
    )
}

