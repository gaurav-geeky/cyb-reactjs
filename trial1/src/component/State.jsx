import { useState } from "react"

let State = () => {

    let [change, setChange] = useState()

    // let [showlocal, setShowlocal] = useState({ }) 

    let show = JSON.parse(localStorage.getItem("userInfo"))


    return (
        <>
            <div style={{ width: "100%", height: "85vh", backgroundColor: "lightgray" }}>
                <h1 style={ { fontSize: "40px", fontWeight: "bold" } }> this is state component</h1> <br />


                <button style={{ marginTop: "60px", width: "80px", backgroundColor: "blue", color: "white", fontWeight: "bold", padding: "5px", borderRadius: "20px" }} onClick={() => setChange(!change)} >
                    {change ? "hide" : "show"}
                </button>

                <h1 style={{ display: change ? "block" : "none" }} >  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid? Repellat rem nihil velit aperiam! Dolores, rem excepturi odit nesciunt adipisci quis ducimus ad molestiae itaque consequuntur porro eius tempora enim suscipit corrupti autem? Mollitia molestias quae possimus sed eius.

                    <h1 > our data : {show.name} , {show.email} , {show.password} </h1>
                </h1>

                <br /> <br />

                <h1 > our data : {show.name} , {show.email} , {show.password} </h1>


            </div>
        </>
    )
}
export default State

