import React, { useEffect, useState } from 'react'

function CounterUseEffect() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("");



    useEffect(() => {
        // console.log(name)
        console.log("Updating title");
        document.title = `You Clicked ${count} times`
    }, [name])


    const handleNameChange = (event) => {
        setName(event.target.value)
        let nameLength = event.target.value.length

        setCount(nameLength)
        console.log(event.target.value, nameLength)
    }

    return (
        <div>
            <h1>The useffect Counter App</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Count : {count} </h2>
            <input value={name} type='text' onChange={handleNameChange}></input>
            <h1>Name : {name}</h1>
        </div>
    )
}

export default CounterUseEffect
