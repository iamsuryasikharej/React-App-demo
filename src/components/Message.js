import React,{Component} from 'react'

export class Message extends React.Component
{
    constructor()
    {
        super();
        this.state={
            message:"welcome visitor"

        }
    }
    render()
    {
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage("Thanks for Clicking")}>Click me</button>

        </div>);
    }

    changeMessage(msg) {
        this.setState({
            message:msg
        })
    }
}