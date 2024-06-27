import React from 'react'

function Title() {
    return (
        <div>
            <h1>This is being Rendered using CallBack Hook </h1>
        </div>
    )
}

export default React.memo(Title)
