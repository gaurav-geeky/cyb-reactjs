import { Link } from "react-router-dom"
import { FaCirclePlay } from "react-icons/fa6";


function Home() {


    return (
        <>
            <article className=" w-full h-165 bg-blue-500  flex  justify-evenly  items-center ">  

                <div  >   
                    <h1 className="ml-5 pt-10 text-white font-bold  border-red-600 text-6xl w-100 leading-20"  > Corporate &  Business Site  </h1>

                    <h2 className=" text-white font-bold border-1  border-red-600 text-6xl w-2xl leading-20 ml-5" > Template By CHRIS GARDNER. </h2>

                    <p className=" text-white   border-red-600 text- w-2xl ml-5 mt-7" > We are a digital firm of Stock Brokers that helps people make their dream come true through their intelligence in stock Broking. We see technology as a tool to connect minds. </p>

                    <div className=" flex  mt-9    ">
                        <button className="  text-blue-600  font-bold  border-none  bg-white  p-2 pl-4 pr-4  rounded-md ml-5 " > GET STARTED</button>
                        <p className=" text-white  text-4xl ml-5" > <FaCirclePlay /> </p>
                        <p className=" text-white  ml-5 pt-1 "> Watch Intro </p>
                    </div>
                </div>

                 <p className=" w-100   border-red-600   "> <img className=" rounded-2xl " src="chris.jpg" alt="" /> </p>
            </article>  
        </>
    )

}

export default Home 
