import React from 'react'
export function Welcome(props) {
    console.log(props.name);
    return (
        <div>
        <h1> Hello {props.name}</h1>
            {props.children}{props.name}
        </div>
    );
}