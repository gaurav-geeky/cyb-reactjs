import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// display one  data  get , save in stae then display
const DisplayOne = () => {

    const [mydata, setmydata] = useState({});

    const loadData = async () => {
        const api = "http://localhost:9999/onedisplay"
        const response = await axios.get(api);
        alert(response.data.msg);
        clg(response.data.user);
        setmydata(response.data.user); 
    }

    useEffect(() => {
        loadData();
    }, []);


    return (
        <>
            <section>
                <div>

                    <h1> display data of one to one. </h1>

                </div>
            </section>
        </>
    )
}

export default DisplayOne
