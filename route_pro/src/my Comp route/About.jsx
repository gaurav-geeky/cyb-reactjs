
import { Link } from "react-router-dom"

function About () { 

    return (
        <>
        <br /> <br />
        <h1>  this is about page   ok ok </h1> 
        <br /> <br />

         <Link className=" font-bold " to="/"> Home</Link> 

         {/*  to jump in   index (home page) use only   " / " */}
        </>
    )
} 

export default About 