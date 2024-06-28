import React from 'react'
import useCounter from '../../hooks/Counter'

function Counter2() {
    const [count, increment, decrement, rest] = useCounter(100000, 100)
    return (
        <div>
            <br></br><br></br> <br></br><br></br>
            <button onClick={increment}>increment</button>
            <span>  </span><span>  </span>
            <button onClick={decrement}>decrement</button>
            <span>  </span><span>  </span>
            <button onClick={rest}>Reset</button>
            <h2>Counter 2s Count : {count}</h2>
            <br></br><br></br> <br></br><br></br>
        </div>
    )
}

export default Counter2
