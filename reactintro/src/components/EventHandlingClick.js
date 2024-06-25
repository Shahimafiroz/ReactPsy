import React from 'react'

function EventHandlingClick() {

    function pickMeHandler() {
        alert("All the picks are to be sent to THE RANCHHHHH!!")
    }

    function choosMeHandler() {
        alert("To the dungeon!Rip my english!")
    }

    function lmaooHandler() {
        alert("everyone be Gone!!! before i execute u ")
    }


    return (
        <div>
            <button onClick={pickMeHandler}>Pick Me ....</button>
            {/* lmaooo my humor is broken >< khehehe */}
            <button onClick={choosMeHandler}>Choose Me  ....</button>
            <button onClick={lmaooHandler}>LMAOOOO</button>
        </div>
    )
}

export default EventHandlingClick
