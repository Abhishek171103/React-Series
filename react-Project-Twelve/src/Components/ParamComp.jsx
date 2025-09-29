import React from 'react'
import { useParams } from 'react-router-dom'        // react-router import ese karke hain

const ParamComp = () => {

    const { name } = useParams();       // useParams hook use karke hum parameters ko access kar sakte hain
    return (
        <div>
            <h1>Student Name: {name}</h1>
        </div>
    )
}

export default ParamComp