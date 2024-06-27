import React, { useState, useCallback } from 'react'
import Title from './Title'
import Buttn from './Button'
import Count from './Count'

function Parent() {
    const [age, setage] = useState(18)
    const [salary, setsalary] = useState(30000)

    const incrementAge = useCallback(() => {
        // console.log("incrementAge function was called")
        // console.log(age)
        setage(age + 1);
    }, [age])

    const incrementSalaray = useCallback(() => {
        // console.log("incrementAge function was called")
        // console.log(salary)
        setsalary(salary + 1000);
    }, [salary])
    // console.log(age, salary)

    return (
        <div>
            <Title></Title>
            <Buttn handleClick={incrementAge}>Increment Age</Buttn>
            <Count text="Age" count={age}></Count>
            <Buttn handleClick={incrementSalaray} >Increment salary</Buttn>
            <Count text="Salary" count={salary} ></Count>
            <h4>Initially if u observe the console logs , all the components were being re-renderd each time we used incrementAge or incrementSalaray which should not happen . It might not be problematic currently but when we have 50 .. 100 component it will cause huge problem for us regarding performance optimization....hence React.memo is  used -------  but eventually we have to use callabckhook why ? to rturn the memoized version of callback function that only chnges if one of the dependency has changed</h4>

        </div>
    )
}

export default Parent
