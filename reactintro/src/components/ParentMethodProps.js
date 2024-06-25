import React from 'react'
import Child from './ChildMethodAsProps'

function ParentMethodProps() {
    function greet() {
        alert("This is a greeting from the parent of the child!")
    }
    return (
        <div>
            <Child greethandler={greet} />
        </div>
    )
}

export default ParentMethodProps
