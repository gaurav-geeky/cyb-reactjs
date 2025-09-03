import React, { useState } from 'react'

function Agecal() {

    let [age, setAge] = useState();
    let [dob, setDob] = useState("");

    function calculateage() {
        if (!dob) return;

        let birth = new Date(dob);
        let today = new Date();

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            let lastdaysmonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
            days += lastdaysmonth;
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });
    }

    return (
        <>
            <section style={{ height: "50vh", textAlign: "center", paddingTop: "50px", backgroundColor: "lightblue", fontSize: "20px", }}>

                <input
                    type="date"
                    style={{ padding: "5px", margin: "0px 20px", fontSize: "16px" }}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <button
                    style={{ padding: "2px 15px", fontSize: "18px", backgroundColor: "blue", color: "white" }}
                    onClick={() => calculateage()}
                > Show </button>

                {age?
                    <div style={{ margin: "40px auto" }}> My Age is {age.years} years {age.months} months {age.days} days </div> : ""
                } 
                
                {/*  Initialize age as an empty object instead of null.
                Or conditionally render the age only if it exists. */}

            </section>
        </>
    )
}

export default Agecal

//  {age && (
//   <h1>
//     {age.year} years {age.month} months {age.days} days
//   </h1>
// )}
