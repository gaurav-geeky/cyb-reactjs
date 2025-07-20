import { Link, Outlet } from "react-router-dom"

function Layout() {

    return (
        <>

            <nav className=" flex  items-center  bg-blue-500  border-b-1 border-white  p-2   " > 
                <p className="ml-5  text-6xl  font-bold " > Stock Broker  </p>  &ensp;  &ensp;
                <Link className=" text-xl " to="/">  Home</Link> &ensp; &ensp;
                <Link className=" text-xl "  to="/about">  About</Link>  &ensp;  &ensp; 
                <Link className=" text-xl "  to="/contact">  Contact</Link>  &ensp;  &ensp;
                <Link className=" text-xl "  to="/services">  Services </Link> 
            </nav>

            <Outlet />

            <footer>
                <h1>  </h1>
               

            </footer>

        </>
    )

}

export default Layout


