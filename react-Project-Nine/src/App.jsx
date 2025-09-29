import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  /* useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])  */

  // First -> side effect function/logic
  // Second -> Clean up function
  // Third -> comma separated dependent list

  /* Variation 1 => runs on every render
      useEffect(() => {
        alert("Run on each render.")
      })

    Variation 2 => that runs on every first render
    useEffect(() => {
      alert("Run on every first render.")
    }, [])

    Variation 3 => that runs on every time when count is updated.
    useEffect(() => {
      alert("Run on every time when count is updated.")
    }, [count])

    Variation 4 => that runs on multiple dependencies.
    useEffect(() => {
      alert("Run on every time when count/total is updated.")
    }, [count, total])

    Variation 5 => that runs on let's add a clean-up function
    useEffect(() => {
      alert("Count is updated.")
      return () => {
        alert("count is unmounted form UI.")
      }
    }, [count])
    
    */
    
    
  
    function handleClick() {
      setCount(count+1);
    }

    function handleClickTotal(){
        setTotal(total+1);
    }

  return (
    <>
      <div>
        Hello Abhishek
        <br />
        <button onClick={handleClick}>Update Count</button>
        <p>Count is : {count}</p>
        <br />
        <button onClick={handleClickTotal}>Update Total</button>
        <p>Total is : {total}</p>
      </div>
    </>
  )
}

export default App
