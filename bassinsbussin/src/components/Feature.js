import React from 'react'
import cupcakeicons from './assets/png/001-cupcake.png'
import seafoodicons from './assets/png/003-seafood.png'
import meat from './assets/png/002-chicken-leg.png'
import veggies from './assets/png/004-veggie.png'
import drinks from './assets/png/005-drink.png'

export default function Feature() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Dancing Script' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={seafoodicons} style={{ padding: '2rem 2rem', backgroundColor: '#FDE4C7', borderRadius: '100px', margin: '2.5rem 2rem 0rem', filter: 'blur' }}></img>
                <p style={{ fontSize: 'large', fontWeight: 'bolder', color: '#763f25' }}>SeaFood</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={meat} style={{ padding: '2rem 2rem', backgroundColor: '#FDE4C7', borderRadius: '100px', margin: '2.5rem 2rem 0rem', filter: 'blur' }}></img>
                <p style={{ fontSize: 'large', fontWeight: 'bolder', color: '#763f25' }}>Meat</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={veggies} style={{ padding: '2rem 2rem', backgroundColor: '#FDE4C7', borderRadius: '100px', margin: '2.5rem 2rem 0rem', filter: 'blur' }}></img>
                <p style={{ fontSize: 'large', fontWeight: 'bolder', color: '#763f25' }}>Veggies</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={cupcakeicons} style={{ padding: '2rem 2rem', backgroundColor: '#FDE4C7', borderRadius: '100px', margin: '2.5rem 2rem 0rem', filter: 'blur' }}></img>
                <p style={{ fontSize: 'large', fontWeight: 'bolder', color: '#763f25' }}>Cakes</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={drinks} style={{ padding: '2rem 2rem', backgroundColor: '#FDE4C7', borderRadius: '100px', margin: '2.5rem 2rem 0rem', filter: 'blur' }}></img>
                <p style={{ fontSize: 'large', fontWeight: 'bolder', color: '#763f25' }}>Drinks</p>
            </div>

        </div>
    )
}
