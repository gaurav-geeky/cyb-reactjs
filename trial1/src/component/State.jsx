import { useState } from "react"


let State = () => {

    let [change, setChange] = useState()

    return (
        <>
            <div style={{ width: "100%", height: "50vh", backgroundColor: "lightgreen" }}>
                <h1> this is state component</h1> <br />

                <button style={{ marginTop: "60px", width: "80px", backgroundColor: "blue", color: "white", fontWeight: "bold", padding: "5px", borderRadius: "20px" }} onClick={() => setChange(!change)} >
                    {change ? "hide" : "show"}
                </button>

                <h1 style={{ display: change ? "block" : "none" }} >  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid? Repellat rem nihil velit aperiam! Dolores, rem excepturi odit nesciunt adipisci quis ducimus ad molestiae itaque consequuntur porro eius tempora enim suscipit corrupti autem? Mollitia molestias quae possimus sed eius. </h1>


            </div>
        </>
    )
}
export default State

 