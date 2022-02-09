import React from 'react'

function Square ({divName, value, onClick}) {
    return (
        <div className={`${divName}`} value={value} onClick={onClick}>
            {value}
        </div>
    )
}

export default Square