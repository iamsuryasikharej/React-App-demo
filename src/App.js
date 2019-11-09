import React,{Component} from 'react';
// import logo from './logo.svg';
import "./App.css";
import {Welcome} from "./components/Welcome";
import {Greet} from "./components/Greet";

class  App extends  Component{
  render() {
    return (
        < div
    className = "App" >
            < Welcome name="surya" ><p>Hello </p></Welcome>

            < Welcome name="Ramu kaka" ><button>click me</button></Welcome>
            < Welcome name="Gulshan" > <p>Hello</p></Welcome>

  )
    ;
  }
}

export default App;
