import { useContext } from "react"  // used to consume data no need store.consumer
import { store } from "../App"


function Child2 () { 

    let name = useContext(store)

    return (
        <>
        <h1> this is child 2 </h1>

        <h1> this is child2 in data : {name} </h1>

        {/* < store.Consumer>
            {
                (data) => <h1> data from app to child 2 (context api) __ {data} </h1>
            }
           
        </store.Consumer> */}

 {/*  jitni  value aayegi  utne arrow funtion  */}
        </>
    )

} 
export default Child2 


// app js me comp call hota hai  2 compo  dashboard jsx , setting jsx call in apjsx 
// pass ob from app jsx     dashboard pe name  and setting pe  mail/ pass (context api use kare )
// 