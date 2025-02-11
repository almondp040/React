import './Box.css'
import { useState } from 'react'
function Box({isActive, toggle}) {

    return (
        <div className="Box" style={{backgroundColor: isActive ? "red" : "black"}} onClick={toggle}></div>
    )
}

export default Box