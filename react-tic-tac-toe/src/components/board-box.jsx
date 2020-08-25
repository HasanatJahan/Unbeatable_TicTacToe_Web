// Component ofr individual boxes and squares on the board 
// This is a  stateless component 
// This is a simple button with click handler and label, both passed 
// by props 

import React from 'react'

// create Box component
export const Box  = (props) => {
    return(
        <button className="board__box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}