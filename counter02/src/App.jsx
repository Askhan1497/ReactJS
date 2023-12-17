import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter >= 20 ? setCounter(20): setCounter(counter+ 1);

  }

  const removeValue = () => {
    counter <=0 ? setCounter(0): setCounter(counter - 1);
    }

  return (
    <>
      <h3>Counter Web App</h3>
      <p>{counter}</p>
      <button style={{marginBottom: "10px"}} onClick={addValue}>Add number</button>
      <br />
      <button onClick={removeValue}>Remove number</button>
    </>
  )
}

export default App
