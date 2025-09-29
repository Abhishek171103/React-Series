import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0);
  let val = useRef(0);

  const btnRef = useRef();

  function handleClick() {
    val.current = val.current + 1;
    console.log("Val:", val.current);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Fr se render ho gya");
  })
  

  function changeColor() {
    btnRef.current.style.backgroundColor = 'red';
  }

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick} ref={btnRef}>
          Increment
        </button>
        <br /><br />

        <button onClick={changeColor}>
          Change color of Increment Button
        </button>
        <br /><br />
      </div>
    </>
  )
}

export default App
