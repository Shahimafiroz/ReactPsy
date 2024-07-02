import React from 'react'
import { useState } from 'react'

function Search({ buttonHandler, searchValue, keepDish }) {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '1rem', backgroundColor: '#FDE4C7', height: '12rem', }}>
                <div>
                    <input

                        type='text'
                        style={{ height: '3rem', width: '20rem', border: '3px solid #555', }}
                        value={searchValue}
                        onChange={keepDish}
                    />
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <button
                        style={{ height: '3rem', width: '10rem', background: '#A36041', color: '#fde4c7', fontFamily: 'Dancing Script', fontSize: 'x-large', }}
                        onClick={buttonHandler}
                    >Search</button>
                </div>
            </div>

        </div>
    )
}

export default Search

{/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '1rem', backgroundColor: '#FDE4C7', height: '12rem', width: '100%' }}>
                <div>
                    <input style={{ height: '3rem', width: '20rem', border: '3px solid #555', }} />
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <button
                        style={{ height: '3rem', width: '10rem', background: '#A36041', color: '#fde4c7', fontFamily: 'Dancing Script', fontSize: 'x-large', }}
                        onClick={search}
                    >Search</button>
                </div>
            </div> */}