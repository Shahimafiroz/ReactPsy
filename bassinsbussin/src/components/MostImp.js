import React from 'react'
import sample from './assets/sample1.jpg'

function MostImp() {
    return (
        <div style={{ fontFamily: 'Mate', margin: '8rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* the top heading */}
            <div>
                <p style={{ fontSize: 'xx-large', fontWeight: 'bold', color: '#345222' }}>    Most Popular Recipes  </p>
                <p style={{ fontSize: 'xxx-large', color: '#A36041' }}>~</p>
            </div>
            {/* end */}
            {/* card element */}
            <div >
                {/* each element */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '50rem', height: '18rem', backgroundColor: '#fde4c7', }}>
                    <div>
                        <img src={(sample)} style={{ width: '20rem', height: "18rem" }}></img>
                    </div>
                    <div>

                    </div>
                </div>




                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start', width: '50rem', height: '18rem', backgroundColor: '#fde4c7', }}>
                    <div>
                        <p>hello</p>
                    </div>
                    <div>
                        <img src={(sample)} style={{ width: '20rem', height: "18rem" }}></img>
                    </div>
                </div>
                {/* each element */}
            </div>
        </div>
    )
}

export default MostImp
