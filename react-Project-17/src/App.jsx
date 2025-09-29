import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function expensiveTask(num) {
    console.log('Expensive task running...')
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2
  }

  let doubledCount = useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
        <p>Count: {count}</p>
        <input type="number"
              value={input}
              placeholder='Enter a number'
              onChange={(e) => setInput(Number(e.target.value))}
        />
        <br />
        <br />
        <button>
          DoubleCount: {doubledCount}
        </button>
      </div>
    </>
  )
}

export default App
