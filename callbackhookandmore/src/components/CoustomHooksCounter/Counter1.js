import React from 'react'
import useCounter from '../../hooks/Counter'

function Counter1() {
    const [count, increment, decrement, rest] = useCounter(7, 7)


    return (
        <div>
            <h1>The twin Counters : </h1>
            <br></br><br></br> <br></br><br></br>
            <button onClick={increment}>increment</button>
            <span>  </span><span>  </span>
            <button onClick={decrement}>decrement</button>
            <span>  </span><span>  </span>
            <button onClick={rest}>Reset</button>
            <h2>Counter 1s Count : {count}</h2>
            <br></br><br></br> <br></br><br></br>
        </div>
    )
}

export default Counter1
