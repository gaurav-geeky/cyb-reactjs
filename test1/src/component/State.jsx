
import { useState } from "react"

function State() {

    let [text, setText] = useState(true)

    let [a, setA] = useState(true)
    return (

        <>
            <div style={{ width: "100%", height: "50vh", backgroundColor: "lightblue" }}>

                <h1 style={{ display: a ? "block" : "none" }} > I am State componenet. </h1> <br />

                <button onClick={() => setA(!a)}> {a ? "Hide" : "Show"} </button> <br />


                <h1 style={{ display: text ? "block" : "none" }}> my var text , function SETTEXT  </h1>

                <button onClick={() => setText(!text)}> {text ? "hide me" : "show me"} </button>

            </div>
            <hr />
        </>
    )
}
export default State

