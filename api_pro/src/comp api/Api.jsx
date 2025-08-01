
import axios from "axios"
import { useEffect, useState } from "react"


let Api = () => {

    let [apidata, setApidata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/userdata')
            .then((res) => setApidata(res.data))
    }, [])

    return (
        <>
            <h1> api comp </h1>
            <table border="2" text-align="center" >

                <tr>
                    <th> ID </th>
                    <th> NAME </th>
                    <th> CONTACT </th>
                    <th> CITY </th>
                    <th> EMAIL </th>
                </tr>
                {
                    apidata.map((e) =>
                        <tr>
                            <td>{e.id} </td>
                            <td>{e.name} </td>
                            <td>{e.contact} </td>
                            <td>{e.city} </td>
                            <td>{e.email} </td>

                        </tr>
                    )
                }


            </table>

        </>
    )
}

export default Api  