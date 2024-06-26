import HookMouse from "./HookMouse";

import React, { useState } from 'react'

function MouseConatinerUnmount() {
    const [display, setDisplay] = useState(true)

    let toggelHandler = (() => (setDisplay(!display)))

    return (
        <div>
            {display && <HookMouse />}
            <br></br><br></br>
            <button onClick={toggelHandler}>Toggel Display</button>
        </div>
    )
}

export default MouseConatinerUnmount
