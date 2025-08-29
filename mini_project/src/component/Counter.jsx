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
            <div style={{
                width: "100%",
                height: "auto",
                backgroundColor: "skyblue",
                textAlign: "center",
                fontSize: "20px",

            }}>
                <div> Counter </div>

                <div style={{
                    width: "20%",
                    margin: "5px auto",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-around",

                }}>
                    <span style={{ display: "flex", justifyContent: "space-around", }}  >
                        <button style={{ fontSize: "20px", padding: "5px 9px" }} onClick={Decrement}> Decrease</button>

                        <button style={{ fontSize: "20px", padding: "5px 9px" }} onClick={Increment}> Increase</button>

                        <button style={{ fontSize: "20px", padding: "5px 9px" }} onClick={() => setCount(0)}> Reset</button>
                    </span> &emsp;

                    <span style={{ fontSize: "22px", placeItems: "center" }}> {count} </span>
                </div>

            </div>
        </>
    )
}

export default Counter



