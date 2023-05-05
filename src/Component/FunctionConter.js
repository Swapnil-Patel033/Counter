import React, { useState, useEffect } from 'react'

function FunctionConter() {

    var [value, SetValue] = useState(0)
    var [SubValue, SetSubValue] = useState(0)


    useEffect(() => {
        // console.log(value)
        if (value!==0 && value%5===0 ) {
            SetSubValue(SubValue + 7)
        }
    },[value])


    //  Start Increment
    const increment = () => {
        SetValue(value + 1)
    }
    //  End Increment


    // Start Decrement
    const decrement = () => {
        SetValue(value - 1)
    }
    // End Decrement


    return (
        <div style={{ marginLeft: '50%' }}>
            <h1>Function Conter</h1>
            <h1>Conter:{value}</h1>
            <h1>Sub Conter:{SubValue}</h1>
            <button onClick={decrement} >decrement</button>
            <button onClick={increment} style={{ margin: 20 }}>increment</button>
        </div>
    )
}
export default FunctionConter;
