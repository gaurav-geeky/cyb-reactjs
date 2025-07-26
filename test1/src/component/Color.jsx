import { useState } from "react"


function Color() {

    let [color, setColor] = useState("yellow")

    return (
        <>

            < div style={{ width: "100%", height: "50vh", backgroundColor: color }} >

                <div style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>

                    <button onClick={() => setColor("red")}  style={{ border: "1px solid black", width: "50px" }} > Red </button>

                    <button onClick={() => setColor("green")} style={{ border: "1px solid black", width: "50px" }} > Green </button>

                    <button onClick={() => setColor("blue")} style={{ border: "1px solid black", width: "50px" }} > Blue </button>

                    <button onClick={() => setColor("yellow")} style={{ border: "1px solid black", width: "50px" }} > reset </button>

                </div>

            </div>

            <hr />
        </>
    )
}

export default Color 