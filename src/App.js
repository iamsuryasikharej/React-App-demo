import React,{Component} from 'react';
// import logo from './logo.svg';
import "./App.css";
import {Welcome} from "./components/Welcome";

class  App extends  Component{
  render() {
    return (
        < div
    className = "App" >
            < Welcome name="surya" ><p>Hello </p></Welcome>
            < Welcome name="Ramu kaka" ><p>Hello</p></Welcome>
            < Welcome name="Gulshan" > <p>Hello</p></Welcome>
        < /div>
  )
    ;
  }
}

export default App;
