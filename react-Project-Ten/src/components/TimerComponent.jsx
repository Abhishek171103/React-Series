import React, { useState, useEffect } from 'react'

const TimerComponent = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval executed");
            setSeconds(prevSeconds => prevSeconds+1);
        }, 1000);
    
        return () => {
            console.log("Component unmounted, clearing interval");
            clearInterval(intervalId);
        }
    }, [])

    // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount
    

    return (
        <div>
            <h1>Seconds: {seconds}</h1>
        </div>
    )
}

export default TimerComponent