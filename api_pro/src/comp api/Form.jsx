
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'  // local form with navigator


function Form() {

    let [frmdata, setFrmdata] = useState({
        name: "", contact: "", city: "", email: ""
    })


    let navigator = useNavigate()

    function handleInput(e) {
        let { name, value } = e.target
        setFrmdata({ ...frmdata, [name]: value })
    }

    function finalsubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/userdata', frmdata)
            .then(() => alert("success.."))
            .catch((err) => alert(err))

        navigator('./api')

    }


    return (
        <>
            <h1> Sign up form </h1>

            <form action="" onSubmit={finalsubmit}>

                <label htmlFor=" "> Name </label>
                <input type="text" name="name" onChange={handleInput} /> <br />

                <label htmlFor=" "> Contact </label>
                <input type="text" name="contact" onChange={handleInput} />  <br />

                <label htmlFor=" "> City </label>
                <input type="text" name="city" onChange={handleInput} />  <br />

                <label htmlFor=" "> Email </label>
                <input type="text" name="email" onChange={handleInput} />  <br />

                <input type="submit" />
            </form>

            <hr />

        </>
    )
}
export default Form