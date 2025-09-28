import React from 'react'

const Greeting = ({timeOfDay}) => {
    const val = timeOfDay == "morning" ? "Good morning" : "Good afternoon";
    return <h1>{val}</h1>
}

export default Greeting
