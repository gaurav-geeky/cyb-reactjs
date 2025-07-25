
import { createContext } from 'react'
import Child1 from './component/Child1'


import Dashboard from './component/Dashboard'



let store = createContext()  // global because kahi bhi bhej sakte hai  
//                            // if made insdie then it becomes local 
let name = " I am from app page"

//  jitni cheze bhejni hai utne function banenge arrow wale (jaha bhejna hai )
let game = " ... game var in app ...."

// object global 
let user = {
  name: "react class",
  email: "react@mail.com",
  pass: "react123"
}


function App() {

  return (
    <>

      <store.Provider value={name}>
        <Child1 />
      </store.Provider>


      {/*   object wala  */}
      <store.Provider value={user}>
        <Dashboard />
      </store.Provider>
      

      {/*  game var */}
      <store.Provider value={game}>
        <Dashboard />
      </store.Provider>  

    </>
  )
}

export default App
export { store }
