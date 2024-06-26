import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setStateX] = useState(0);
    const [y, setStateY] = useState(0);

    const logMousePosition = e => {
        console.log('mouse position')
        setStateX(e.clientX) // client x - x coordianate 
        setStateY(e.clientY) //client y - y coordinat
    }

    useEffect(() => {
        console.log("Squeeeeeeekkkk// useEffect called ");
        window.addEventListener('mousemove', logMousePosition) // both of the 'mousemove' and 'logMousePosition' are predefined
        return () => {
            console.log("component unmounting code")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            <h1>The Mouse Event App </h1>
            <h2>X- {x}  Y-{y}</h2>
        </div>
    )
}

export default HookMouse


