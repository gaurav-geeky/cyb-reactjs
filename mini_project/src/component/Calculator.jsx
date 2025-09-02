import React, { useState } from 'react'

function Calculator() {

    let [input, setInput] = useState("");

    function result() {
        try {
            const expression = input;
            let finalResult;

            if (expression.includes('*')) {
                const parts = expression.split('*');
                finalResult = parseFloat(parts[0]) * parseFloat(parts[1]);
            } 
            else if (expression.includes('/')) {
                const parts = expression.split('/');
                if (parseFloat(parts[1]) === 0) {
                    setInput('Error: Division by zero');
                    return;
                }
                finalResult = parseFloat(parts[0]) / parseFloat(parts[1]);
            } 
            else if (expression.includes('+')) {
                const parts = expression.split('+');
                finalResult = parseFloat(parts[0]) + parseFloat(parts[1]);
            } 
            else if (expression.includes('-')) {
                const parts = expression.split('-');
                finalResult = parseFloat(parts[0]) - parseFloat(parts[1]);
            } 
            else {
                finalResult = parseFloat(expression);
            }

            setInput(finalResult.toString());

        } catch (error) {
            setInput('Error');
            console.error('Calculation error:', error);
        }
    }


    function others(btn) {
        setInput(input + btn);
    }

    function deleter() {
        setInput(input.slice(0, -1));
    }

    function clear() {
        setInput("");
    }


    return (
        <>
            <section style={{ width: "220px", textAlign: "center", margin: "50px auto" }}>
                <h1> CalEval without eval </h1>

                <input type="text"
                    value={input}
                    style={{ width: "220px" }}
                />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", }}>

                    {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "=", "/", "%"].map(
                        (btn) =>

                            btn == "=" ?
                                (<button
                                    style={{ padding: "15px", backgroundColor: "wheat", margin: "2px" }}
                                    onClick={() => result()}>
                                    {btn}
                                </button>)
                                :
                                (<button
                                    style={{ padding: "15px", backgroundColor: "gray", margin: "2px" }}
                                    onClick={() => others(btn)}>
                                    {btn}
                                </button>)

                    )}

                    <button style={{ backgroundColor: "red", color: "white" }} onClick={() => deleter()}> DEl</button>

                    <button style={{ gridColumn: "span 2", backgroundColor: "lightyellow", }} onClick={() => clear()}> clear</button>
                </div>

            </section>
        </>
    )
}

export default Calculator


