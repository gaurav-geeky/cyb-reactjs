import React, { useState } from 'react'

function Atmpin() {
    let [pass, setPass] = useState("");

    function pin() {
        setPass(
            Math.floor((Math.random() * 9000) + 1000)
        )
    }

    return (
        <>
            <section style={{ textAlign: "center", margin: "auto auto", padding: "5px", backgroundColor: "lightgreen" }}>
                
                <h1> password generator</h1>
                <button 
                style={{ backgroundColor: "red", color: "white", fontSize: "18px", padding: "4px 10px",}}
                    onClick={() => pin()}
                > Add pass </button>

                <h1 style={{ width: "25%", textAlign: "center", margin: "10px auto"}}> password min 4 digit :   {pass} </h1>

            </section>

        </>
    )
}

export default Atmpin
