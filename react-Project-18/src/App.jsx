import './App.css'
import { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent'
import ExpensiveComponent from './components/ExpensiveComponent'

function App() {

  const[count, setCount] = useState(0)
  
  function handleClick(){
    setCount(count + 1)
  }

  const memoizedHandleClick = useCallback(handleClick, [count]);

  return (
    <>
      <h1>React Project 18</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>
        Increment
      </button>
      <br /><br />
      <ChildComponent
              buttonText={"Click Me"} 
              handleClick={memoizedHandleClick}
      />
      <br /><br />
      <ExpensiveComponent />
    </>
  )
}

export default App
