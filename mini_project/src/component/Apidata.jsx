import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Apidata() {

    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get(' https://dog.ceo/api/breeds/image/random ')
            .then((response) => {
                console.log(response);
                setData(response.data);
            })

    }, [])

    return (
        <>
            <article style={{ border: "1px solid black", textAlign: "center", padding: "10px", backgroundColor: "lightblue"}}>
                <h1> Get Dog Images using API link </h1>

                <table border={1} style={{ width: "60%", margin: "auto", backgroundColor: "lightgreen"}} >
                    <tr style={{ fontSize: "18px", color: "red"}}>
                        <th> Message </th>
                        <th> Status </th>
                        <th> Image </th>
                    </tr> 

                    <tr>
                        <td> {data.message} </td>
                        <td> {data.status} </td>
                        <td> <img height={200} src={data.message} alt="pic" /> </td>
                       
                    </tr>
                </table>
                
            </article>
        </>
    )
}

export default Apidata
