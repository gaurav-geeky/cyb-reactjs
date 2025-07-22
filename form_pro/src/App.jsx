import Form from "./my comp/Form";
import Multiform from "./my comp/Multiform";

import './App.css'


function App() {

  return (
    <>
      <h1> this si app jsx content</h1>
      <br /> <br /> 
      <h1> here is form with individual useStates  &ensp; variable form </h1>
      < Form/>

      <br /> <br /> <br /> 
      <h1> here is form with single useState in object form  </h1>
      < Multiform />
    </>
  )
}

export default App

