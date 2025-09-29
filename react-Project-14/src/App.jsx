import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount} from './Features/Counter/counterSlice'
import './App.css'
import { useState } from 'react'

function App() {

  const count = useSelector((state) => state.counter.value);  // access the state from the store
  const dispatch = useDispatch(); // to dispatch actions
  const [amount, setAmount] = useState(0);

  function handleIncrement() {
    // dispatch an action to increment the count
    dispatch(increment());
  }

  function handleDecrement() {
    // dispatch an action to decrement the count
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <>
      <div>
        <button onClick={handleIncrement}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}> - </button>
        <br /><br />
        <button onClick={handleResetClick}> Reset </button>
        <br /><br />
        <input type="number"
                value={amount}
                placeholder='Enter amount'
                onChange={(e) => setAmount(e.target.value)}/> 
        <br /><br />
        <button onClick={handleIncrementByAmount}> Increment By Amount </button>
      </div>
    </>
  )
}

export default App
