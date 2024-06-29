import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
    <h1>This is My First Project</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button> &nbsp;
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
