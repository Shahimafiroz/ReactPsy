import React, { useMemo } from 'react'
import { useState } from 'react'

function Counter() {

    const [Count1, setCount1] = useState(0)
    const [Count2, setCount2] = useState(0)



    const clickHandler1 = () => {
        setCount1(Count1 + 1)

    }
    const clickHandler2 = () => {
        setCount2(Count2 + 2)
    }



    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000000, i++) {
            console.log(i)
            return (Count1 % 2 == 0)

        }
    }, [Count1])










    return (
        <div>
            <h1>The Saga of The Counter App - useMemo Hook </h1>
            <button onClick={clickHandler1}>Counter 1 - Count : {Count1} </button>
            <br></br><br></br>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <br></br><br></br>
            <button onClick={clickHandler2}>Counter 2 - Count : {Count2} </button>

        </div>
    )

}
export default Counter
