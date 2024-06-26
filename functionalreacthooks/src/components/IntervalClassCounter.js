import React, { useEffect, useState } from 'react'

function IntervalClassCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        console.log("tick function executing")
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('Use effect called ')
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    ///// style
    return (
        <div>
            <h1>Timer : {count}</h1>
        </div>
    )
}

export default IntervalClassCounter
