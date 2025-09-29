import React from 'react'
import { useState, useEffect } from 'react'

const MultiEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count])
    // Side effect that runs after every render when 'count' changes

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("SetInterval running");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("Clearing interval");
            clearInterval(interval);
        };
    }, []);
    // Side effect that sets up an interval to update 'seconds' every second

    function handleClick() {
        setCount(prevCount => prevCount + 1)
    }
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment Count</button>
            <h1>Seconds: {seconds}</h1>
        </div>
    )
}

export default MultiEffectComponent