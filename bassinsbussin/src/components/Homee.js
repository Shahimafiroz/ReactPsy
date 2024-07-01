import React from 'react'
import fooImage from './assets/foo2.jpg'


function Homee() {
    return (
        <div style={{ position: 'relative', fontFamily: 'Mate' }}>
            <div style={{ display: ' flex', flexDirection: 'row' }}>
                <div>
                    <img src={fooImage} style={{ width: '100%', height: '30rem', }} alt='banner'></img>
                </div>
                <div style={{ position: 'absolute', bottom: '153px', left: '176px', alignContent: 'start' }}>
                    <h1 style={{ color: '#97a68f', textAlign: 'start', fontSize: 'xxx-large', textShadow: '2px 2px #0c0b10' }}>Discover Culinary<br></br> Delights</h1>
                    <h2 style={{ textAlign: 'start', color: '#8D6755', textShadow: '2px 2px #0c0b10' }}>Recipes made simple !</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '2rem' }}><button style={{ color: 'white', height: '3rem', width: '9rem', backgroundColor: 'transparent', fontSize: 'Medium', fontWeight: 'normal', borderRadius: '10px', border: '2px solid #97a68f' }}>Get Started</button></div>
                </div>
            </div>
        </div >
    )
}







export default Homee

