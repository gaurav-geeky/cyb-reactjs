import React, { useState } from 'react'

function Bgcolor() {

    let [rang, setRang] = useState("white")
    let [input, setinput] = useState();

    function colorme() {
        setRang(input)
    }

    return (
        <>
            <section
                style={{ width: "100%", height: "50vh", backgroundColor: rang, border: "1px solid black", padding: "90px 0px" }}>

                <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)} 
                    style={{ padding: "4px 10px"}}
                />

                    <span style={{ padding: "4px 8px", marginLeft: "20px", color: input, fontSize: "20px" ,backgroundColor: "white", fontWeight: "bold", marginLeft: "40px" }}
                        onClick={() => colorme()}
                    > color it </span> 

                    <div style={{ backgroundColor: "k" }}> here input is in STRING  form that's why  color is appearing in bg color. </div>
            </section>
        </>
    )
}

export default Bgcolor
