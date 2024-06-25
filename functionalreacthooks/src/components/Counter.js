// this is a counter using hooks 
import { useState } from 'react';

import React from 'react'

const Counter = () => {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    return (
        <div>
            <h1>The Counter App </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br></br><br></br><br></br>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br></br><br></br><br></br>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <br></br><br></br><br></br>
            <h1>Current Count : {count}</h1>

        </div>
    )
}

export default Counter
