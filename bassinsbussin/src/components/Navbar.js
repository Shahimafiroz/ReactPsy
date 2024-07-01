import React from 'react'



function Navbar() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontFamily: 'Mate', fontSize: '15px', padding: '0.5rem', height: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bolder', fontSize: 'x-Large', paddingLeft: '5rem' }}>
                <img src={require('./assets/logo.png')} style={{ height: '4rem', width: '4rem', padding: '0rem , 2rem' }} alt='logo'></img>
                <p style={{ color: '#81482b', }}> BasseinIsBussin</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontWeight: 'bold', color: '#81482b', paddingTop: '1rem', paddingRight: '5rem' }}>
                <p style={{ padding: ' 0px 20px' }}>Home</p>
                <p style={{ padding: ' 0px 20px' }}>Most Popular</p>
                <p style={{ padding: ' 0px 20px' }}>All recipes</p>
                <p style={{ padding: ' 0px 20px' }}>Get In touch!</p>
            </div>

        </div >
    )
}

export default Navbar
