import { Link, Outlet } from "react-router-dom"

function Layout () { 

    return (

        <> 
        <nav> 
            <ul> 
                <li> <Link to="/">  Home</Link></li>
                <li> <Link to="/about">  About</Link></li>
                <li> <Link to="/Contact">  Contact</Link></li>
            </ul>
        </nav>

        <Outlet /> 

        <footer> 
            <h1> this is our footer 1</h1>
            <h1> this is our footer 2</h1>
            <h1> this is our footer 3</h1>

        </footer>
        </>
    ) 

}

export default Layout 


