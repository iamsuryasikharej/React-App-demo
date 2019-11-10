import React , {Component} from 'react'

export class Counter extends Component
{
    constructor()
    {
        super()
        this.state=
            {
                counter:0
            }

    }

    render()
    {
        return <div> <h1>{this.state.counter}</h1>
        <button onClick={()=>this.click()}>Click me </button>
        </div>;

    }
    click()
    {
     this.setState(
         {
             counter:this.state.counter+1

         }
     )
    }
}