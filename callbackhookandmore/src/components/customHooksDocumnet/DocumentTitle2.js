import React from 'react'
import { useState } from 'react'
import useDocumentTitle from '../../hooks/DocumentTitle'


function DocumentTitle2({ count, buttonClick }) {
    // const [count, setcount] = useState(0)
    // const onClickHandler = () => {
    //     setcount(count + 1)
    // }
    return (
        <div>
            {/* <p>{count}</p> */}
            <button onClick={buttonClick}>Counter 2 : {count} </button>
        </div>
    )
}

export default DocumentTitle2
