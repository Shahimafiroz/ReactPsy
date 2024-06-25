import React from 'react'

// function DestructuringProps({ name, heroname }) {

//     return (
//         <div>
//             <h1>Hiiiii {name} aka  {heroname}</h1>
//         </div>
//     )
// }



function DestructuringProps(props) {
    const { name, heroname } = props
    return (
        <div>
            <h1>hiii {name} a.k.a {heroname}</h1>
        </div>
    )
}


export default DestructuringProps