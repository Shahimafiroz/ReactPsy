import { useState } from "react"

function useCounter(initialCount = 0, value) {
    const [count, setcount] = useState(initialCount)

    const increment = () => {
        setcount(count => count + value)
    }

    const decrement = () => {
        setcount(count => count - value)
    }

    const rest = () => {
        setcount(0)
    }
    return [count, increment, decrement, rest]
}

export default useCounter
