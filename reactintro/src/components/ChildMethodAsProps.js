import React from 'react'

function ChildMethodAsProps({ greethandler }) {
    return (
        <div>
            <h1> Child component</h1>
            <button onClick={greethandler}>greeting  </button>
        </div>
    )
}

export default ChildMethodAsProps
