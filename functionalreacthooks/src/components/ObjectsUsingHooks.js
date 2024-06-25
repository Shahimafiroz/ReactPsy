import React, { lazy, useState } from 'react'

function ObjectsUsingHooks() {

    const [nam, setNam] = useState({ firstName: '', lastName: '' })




    return (
        <div>
            <h1> The Name App - usestate Hook with Objects</h1>
            <br></br><br></br>
            <input type='text' value={nam.firstName} onChange={e => setNam({ ...nam, firstName: e.target.value })}></input>
            <br></br><br></br>
            <input type='text' value={nam.lastName} onChange={e => setNam({ ...nam, lastName: e.target.value })}></input>
            <br></br><br></br>
            <h2>Your First Name : {nam.firstName}</h2>
            <h2>Your Last Name : {nam.lastName}</h2>
            {/* <h2 >{JSON.stringify(nam)}</h2> */}
        </div >
    )
}

export default ObjectsUsingHooks
