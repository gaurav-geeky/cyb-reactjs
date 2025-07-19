import { RiReactjsLine } from "react-icons/ri";

function Contact() {

    return (
        <>
            <br />
            <div className=" border-2 border-blue-400 w-2xl m-3">

                <h1 className=" text-xl text-red-500 text-center font-bold m-2  " > This is our Contact Form react here </h1>

                <div className="  flex justify-evenly items-center">

                    <form className=" m-2" action="">
                        Name <input type="text" className=" border-1 border-black m-1 p-1 " />
                        <br />
                        Mobile <input type="Number" className=" border-1 border-black m-1 p-1  " />
                        <br />
                        Age <input type="Number" className=" border-1 border-black  m-1 p-1  " />
                        <br />
                        Address <input type="text" className=" border-1 border-black m-1 p-1  " />
                    </form>

                    <p className=" text-[9em] text-blue-300 bg-black "> < RiReactjsLine /> </p>
                </div>

            </div>

        </>
    )
}

export default Contact 