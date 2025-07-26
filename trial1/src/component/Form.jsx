import { useState } from "react"

let Form = () => {

    let [info, setInfo] = useState({  // to take form value in object form
        name: "", email: "", password: ""
    })

    let Value = (e) => {   //                handle dynamic value & set in form. 
        let { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }

    let [showdata, setShowdata] = useState({})    //     to show data sm where. 


    let final = (e) => {      //         final submission pr form rok     ke   data console kiya
        e.preventDefault()
        console.log(info)

        //                               localStorage  set to   store value and  get to print anywhere
        localStorage.setItem("userInfo", JSON.stringify(info))
        let got = JSON.parse(localStorage.getItem("userInfo"))
        setShowdata(got)

    }

    return (
        <> 

            <div style={{ width: "100%", height: "50vh", backgroundColor: "lightyellow" }} >
                <h1> this is form component</h1>

                <form action="" onSubmit={final}>

                    <label htmlFor=""> NAME </label>
                    <input type="text" name="name" onChange={Value} /> <br /> <br />

                    <label htmlFor=""> EMAIL </label>
                    <input type="text" name="email" onChange={Value} /> <br /> <br />

                    <label htmlFor=""> PASSWORD </label>
                    <input type="text" name="password" onChange={Value} />  <br /> <br />

                    click <input type="submit" />

                </form>
                <br /> <br />

                <h1> details of form </h1>

                <h1> name : {showdata.name}  </h1>
                <h1> email : {showdata.email}  </h1>
                <h1> password : {showdata.password}  </h1>
            </div>

        </>
    )
}
export default Form   
