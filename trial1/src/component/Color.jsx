import { useState } from "react"
// import { Link } from "react-router-dom"


export let Color = () => {

    let [color, setcolor] = useState("lightpink")
    

    return (
        <>
            <div style={{ width: "100%", height: "50vh", backgroundColor: color }}>
                <h1 style={{ color: "white"}}> this is color component</h1> 

                {/* <p>  <Link to="/color"> COLOR </Link> </p> 
                <p> <Link to="/state"> STATE </Link> </p>
                <p> <Link to="/form"> FORM </Link>  </p> */}

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}> 

                    <button style={{ width: "100px", height: "auto", border: "1px solid black", margin: "5px", backgroundColor: "red" }} onClick={() => setcolor("red")} > red btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black ", margin: "5px", backgroundColor: "lightblue" }} onClick={() => setcolor("blue")} > blue btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black ", margin: "5px", backgroundColor: "lightgreen" }} onClick={() => setcolor("lightgreen")} > green btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black", margin: "5px", backgroundColor: "lightyellow" }} onClick={() => setcolor("yellow")} > yellow btn </button>
                    
                    <button style={{ width: "100px", height: "auto", border: "1px solid black", margin: "5px", backgroundColor: "white" }} onClick={() => setcolor("lightpink")} > reset btn </button>

                </div>

            </div>
        </>
    )
}