import React,{Component} from 'react';
// import logo from './logo.svg';
import "./App.css";
import {Welcome} from "./components/Welcome";
import {Greet} from "./components/Greet";
import {MyButton} from "./components/MyButton";
import {Message} from "./components/Message";

class  App extends  Component{
  render() {
    return (
        < div
    className = "App" >

            <Message></Message>

        < /div>
  )
    ;
  }
}

export default App;
