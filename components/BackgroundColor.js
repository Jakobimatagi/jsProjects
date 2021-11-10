import React from 'react'
import { useState } from 'react'

function BackgroundColor() {
    const [color, setColor] = useState('')


    const styleObj = {
        background: color
    }
    return (
        <div style={styleObj} className="input">
            <h2>Change Divs Background</h2>
            <input onChange={(e) => setColor(e.target.value)} value={color} type="text" placeholder="Type Color"/>
        </div>
    )
}

export default BackgroundColor
