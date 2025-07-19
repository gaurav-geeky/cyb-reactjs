
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './my Comp route/Home'
import About from './my Comp route/About'
import Contact from './my Comp route/Contact'

import Layout from './my Comp route/Layout'

function App() {

  return (
    < >
      <div className=' p-4 '>

        {/* <h1 > this is our app page </h1> */}

        {/* <Routes > */}

        {/* <Route path="/home" element={<Home />} />  */}

        {/* <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>  */}

        <Routes>

          <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App






