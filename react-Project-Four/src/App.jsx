import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count+1);
    }

  return (
    <>
      <div>
        <Card name='Abhishek Jain'>
            <h1>Best Web dev course</h1>
            <p>This course is designed for beginners and experienced developers alike.</p>
            <p>Will complete the course soon</p>
        </Card>

        <Button incrementCount={handleClick} text="click Me">
          <h1>{count}</h1>
        </Button>
        {/* /* <Card children="Hum to children hai.">
          Hello Jee, Kaise ho saare.
        </Card> */}
      </div>
    </>
  )
}

export default App
