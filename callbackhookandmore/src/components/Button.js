import React from 'react'

function Buttn({ handleClick, children }) {
    console.log("Button :" + children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(Buttn)
