import axios from "axios"
import { useEffect, useState } from "react"


let Api = () => {

    let [apidata, setApidata] = useState([]) 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => setApidata (res.data) )
    }, [])

    return (
        <>
            <h1> api comp </h1>
            <table border="2"  text-align= "center" >

                <tr>
                    <th> ID </th>
                    <th> TITLE </th>
                    <th> URL </th>
                </tr>
                {
                    apidata.map( (e) =>  
                    <tr>
                        <td>{e.id} </td>
                        <td>{e.title} </td>
                        <td>{e.url} </td>
                        
                    </tr>
                    )
                }


            </table>

        </>
    )
}

export default Api  