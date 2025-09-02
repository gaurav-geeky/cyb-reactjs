import React, { useState } from 'react'

function Counter() {

    let [count, setCount] = useState(0);

    function Increment() {
        setCount((prev) => prev + 1);
    }

    function Decrement() {
        if (count > 0) setCount((prev) => prev - 1);
    }


    return (
        <>
            <article style={{
                width: "auto",
                height: "auto",
                backgroundColor: "skyblue",
                textAlign: "center",
                fontSize: "20px", 
                paddingTop: "30px", 
                paddingBottom: "30px"
            }}>

                <div style={{ paddingBottom: "10px"}}> Counter </div>

                <div style={{
                    width: "20%", 
                    margin: "auto", 
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-around",

                }}>
                    <span style={{ display: "flex", justifyContent: "space-around", }}  >
                        <button style={{ fontSize: "20px", padding: "5px 9px" }} onClick={Decrement}> Decrease</button>

                        <button style={{ fontSize: "20px", padding: "5px 9px", margin: "auto 10px", }} onClick={Increment}> Increase</button>

                        <button style={{ fontSize: "20px", padding: "5px 9px" }} onClick={() => setCount(0)}> Reset</button>
                    </span> &emsp;

                    <span style={{ fontSize: "30px", }}> {count} </span>
                </div>

            </article>
        </>
    )
}

export default Counter



