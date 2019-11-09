import React,{Component} from 'react'

export class Greet extends React.Component
{
    render()
    {
        return (<div>
            <h5>From class component{this.props.name}</h5>
        {this.props.children}</div>);
    }
}