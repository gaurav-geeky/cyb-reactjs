import { Link } from "react-router-dom"

function Home () { 


    return (
        <>
         <br /> <br /> 
        <h1> this is home page in index ok ok  </h1> 
        <br /> <br /> 

        <ul>
            <li> <Link className=" font-bold " to="/about"> About</Link> </li>
        </ul>
        </>
    )
} 

export default Home 