import React from 'react'
import { useState } from 'react'
function Counter() {

const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <div className="buttons">
                <button className="counter__buttons" onClick={() => setCount(count - 1)}>-</button>
                <button className="counter__buttons" onClick={() => setCount(0)}>Reset</button>
                <button className="counter__buttons" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
