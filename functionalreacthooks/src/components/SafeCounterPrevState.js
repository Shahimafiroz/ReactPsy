import React, { useState } from 'react'

function SafeCounterPrevState() {
    const [count, setCount] = useState(0);

    const incby5 = (prevCount) => {
        setCount(prevCount + 5)
    }


    function Incrementby5() {
        console.log('inside Incrementby5 ');
        setCount((prevCount) => prevCount + 5);

    }

    const incrementHandler = () => {
        setCount(10)
    }

    return (
        <div>
            <h1>The Counter App </h1>
            <button onClick={incrementHandler}>Increment</button>
            <br></br><br></br><br></br>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br></br><br></br><br></br>
            <button onClick={() => setCount(0)}>Reset</button>
            <br></br><br></br><br></br>
            {/* <button onClick={() => setCount(Incrementby5)}>+5</button> */}
            <button onClick={Incrementby5}>+5</button>
            <br></br><br></br><br></br>
            <h1>Current Count : {count}</h1>
        </div>
    )
}

export default SafeCounterPrevState
