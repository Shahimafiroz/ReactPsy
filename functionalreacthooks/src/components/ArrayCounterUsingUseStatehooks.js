import React, { useState } from 'react'

function ArrayCounterUsingUseStatehooks() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <h1>UseState Hook with Array</h1>
            <input type='text' value={items} onChange={""}></input>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => {
                    console.log(item.id)
                    console.log(item.value)
                    return <li key={item.id}>{item.value}</li>
                })}
            </ul>
        </div>
    )
}

export default ArrayCounterUsingUseStatehooks
