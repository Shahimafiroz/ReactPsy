import { useEffect, useState } from "react"


function useDocumentTitle() {

    const [count, setcount] = useState(0)

    const buttonClick = () => {
        setcount(prev => prev + 1)
    }

    console.log(count)
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])

    // return [buttonClick] )
    return [count, buttonClick]

}

export default useDocumentTitle
