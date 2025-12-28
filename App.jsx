import { useState } from 'react'
import './App.css'

function App() {
  
   const [show,setshow]=useState(false)
  const [logedin,setlogedin]=useState(false)


   function sh()
   {
    setshow(!show)
   }
   //2nd projects
   function log()
   {
    setlogedin(true)
   }

  return (
    <>
      <div>
         <button className='btn' onClick={sh}>hide/show</button>
   {show  &&  <p>hello</p>}  {/*  light on bulb glow            */}  <br/> <br/> <br/>
  
   <button className='btn' onClick={log}>Log in</button>
    {logedin && <h3> Welcome user   </h3>    }



       </div>
    </>
  )
}

export default App
