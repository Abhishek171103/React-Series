import React from 'react'
import { useState, useCallback, useRef, useEffect } from 'react'

const ExpensiveComponent = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef(null);

    function expensiveCalculation() {
        console.log("Expensive calculation running...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }

    const memoizedExpensiveCalculation = useCallback(expensiveCalculation, [count]);

    useEffect(() => {
        if(previousFunction.current) {
            if (previousFunction.current === memoizedExpensiveCalculation) {
                console.log("Function reference changed");
            }else {
                console.log("Function reference did not change");
            }
        }else {
            previousFunction.current = memoizedExpensiveCalculation;
        }
    }, [memoizedExpensiveCalculation])
    

    return (
        <div style={{backgroundColor: "yellowgreen", padding: "20px"}}>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type something...'
            />
            <p style={{color: "black"}}>Expensive Calculation Result : {memoizedExpensiveCalculation()}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>  
    )
}

export default ExpensiveComponent