import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Formone from './One/Formone'
import DisplayOne from './One/DisplayOne'


function App() {

  return (
    <>

       {/* Navbar / Menu */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/one"> FormOne</Link>
        <Link to="/display">Display</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/one" element={<Formone />} />
        <Route path="/display" element={<DisplayOne />} />
      </Routes>

    </>
  )
}

export default App; 
