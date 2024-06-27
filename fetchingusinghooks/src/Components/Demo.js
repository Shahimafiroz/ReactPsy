import React from 'react'

const Demo = () => {

    const printFoo = (name) => {

        if (name == 'Shahima') {
            console.log('calling from print Foo', name)

        } else {
            console.log('I only print shahima')
        }

    }


    printFoo('Shahima')
    printFoo('rahul')



    return (
        <div>
            Demo
        </div>
    )
}

export default Demo
