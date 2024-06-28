import React from 'react'
import { useState, useEffect } from 'react'
import useDocumentTitle from '../../hooks/DocumentTitle'




function Document1({ count, buttonClick }) {
    // const [count, setcount] = useState(0)
    // useDocumentTitle()
    // const onClickHandler = () => {
    //     setcount(count + 1)
    // }

    // console.log()

    // const [count, buttonClick] = useDocumentTitle()


    return (
        <div>

            <h1>The Custom Hook implementation</h1>
            {/* <p>{count}</p> */}
            <button onClick={buttonClick}>Counter 1 :  {count}</button>
            <br></br><br></br>
        </div>
    )
}

export default Document1
