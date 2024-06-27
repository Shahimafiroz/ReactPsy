import React from 'react'
import { useEffect, useRef } from 'react'

function UseRefHooks() {

    const inputRef = useRef(null)

    useEffect(() => { inputRef.current.focus() }, [])

    return (
        <div>
            <h1>The useRef Hook </h1>
            <br></br><br></br>
            <input ref={inputRef}></input>
        </div>
    )
}

export default UseRefHooks
