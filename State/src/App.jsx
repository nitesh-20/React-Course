import React from 'react'
import { useState } from 'react'

const App = () => {
  // const[count,setCount]=useState(100)
  const [color, setColor] = useState("red");
  return (
    <div>
      {/* <h1>Number : {count}</h1>
      <button onClick={()=>setCount(count-1)}>Update Number</button> */}
        <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
<button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </div>
  )
}

export default App