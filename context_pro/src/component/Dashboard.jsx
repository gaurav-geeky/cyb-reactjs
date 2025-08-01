import { useContext } from "react"
import { store,  } from "../App"
import Setting from "./Setting"


function Dashboard() {

    let data = useContext(store) 
    // let gamedata = useContext(storegame)
    return (
        <>
            <h1> this is dashboard </h1>
            <br />

            <h1> data from app to dashboard name: __ usecontext__ {data.name} &   </h1>

            <h1> data from app to dashboard email: __ usecontext__ {data.email} </h1>

            <h1> data from app to dashboard pass : __ usecontext__ {data.pass} </h1>

            <h1> this is game in use context ___  </h1>

            <br /> <br />
            <store.Consumer>
                {
                    (data) => <h1> data in dashboard form app js __consume__ {data.name} </h1>
                }
            </store.Consumer>

            <Setting />

        </>
    )
}
export default Dashboard